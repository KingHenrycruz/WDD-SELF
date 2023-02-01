let randomDice1 = Math.floor(Math.random()*6 + 1) //1 - 6
let randomDiceImage = 'dice' + randomDice1 + '.png'; //dice1.png
let imageSource = '../Images/' + randomDiceImage;

const image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', imageSource);



let randomDice2 = Math.floor(Math.random()*6 + 1)
let imageSource2 = '../Images/dice' + randomDice2 + '.png'

const image2 = document.querySelectorAll('img')[1].setAttribute('src', imageSource2);

if (randomDice1 > randomDice2){
    document.querySelector('h1').innerHTML = '❤️Player 1 Wins!';
}else if(randomDice1 === randomDice2){
    document.querySelector('h1').innerHTML = '❤️Draw❤️'
}
else{
    document.querySelector('h1').innerHTML = 'Player 2 Wins!❤️'
}
