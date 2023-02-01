const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/calcForm.html')
})

app.post('/',(req,res)=>{
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let result =num1*num2

    res.send('The result after multiplying is: ' + result)
})

app.listen(3000, ()=>{
    console.log('listening to port 3000')
})