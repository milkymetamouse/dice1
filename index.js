// Dice one

var randomNumber1 = Math.floor(Math.random()*6) + 1;
var addRandomNumber = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", addRandomNumber);

// Dice two

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var addRandomNumber = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", addRandomNumber);

// Dice three

var randomNumber3 = Math.floor(Math.random()*6) + 1;
var addRandomNumber = "images/dice" + randomNumber3 + ".png";
document.querySelector(".img3").setAttribute("src", addRandomNumber);

// Winning Coniditions

if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3) {
  document.querySelector("h1").innerHTML = "🚩Plora Wins!";
}
else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3) {
  document.querySelector("h1").innerHTML="Huntrr 🚩 Wins!";
}
else if (randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2) {
  document.querySelector("h1").innerHTML="Reco Wins! 🚩";
}

else {
document.querySelector("h1").innerHTML="Draw"; }
