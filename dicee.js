//Returns a random integar from 0 to 5 (User does not determine the dice roll so no need to range 1 to 6 )//
let randomNumber1 = Math.floor((Math.random() * 6));
let randomNumber2 = Math.floor((Math.random() * 6));

//Array of image directories to replace the dice upon refresh//
let imgList = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png',
];

//Replaces dice image on HTML//
document.querySelector(".img1").src = imgList[randomNumber1];
document.querySelector(".img2").src = imgList[randomNumber2];

//Keep track of score and determine winner//
//&#128681 UTF8 code for red flag//
function scoreBoard() {
if (randomNumber1 > randomNumber2){
    return "&#128681Player 1 Wins!"
} else if (randomNumber1 < randomNumber2){
    return "Player 2 Wins!&#128681"
} else {
    return "DRAW! " 
};

}

//Modify HTML to display winner or draw//
document.querySelector("h1").innerHTML = scoreBoard();


