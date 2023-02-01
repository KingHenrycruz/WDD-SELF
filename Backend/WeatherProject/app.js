const express = require("express");
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}))



app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
    // res.send("Your weather data has been sent to your console")
})

app.post('/', (req,res)=>{
    const city = req.body.cityName
    const apiKEY = "3b8d17ef6c4e0ea50877908d76e7dfd9";
    const unit= "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=" +apiKEY+ "&units="+unit;

    https.get(url, (resp)=>{
        console.log(resp.statusCode);

        resp.on('data', (data)=>{
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png"

            res.write("<h1>The temperature in the city of "+city+" is " + temp + " degrees Celcius.</h1>");
            res.write("<h2>The weather is currently " + weatherDescription + "</h2>")
            res.write("<img src="+ imageURL+">")
            res.send()
        })
    })
    console.log('Request succesfully submitted')
})

app.listen(3000, ()=>{
    console.log("listening to port 3000")
})