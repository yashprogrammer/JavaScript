// alert("Hey! There");
// console.log($("h1").text("Change using JQUERY"));

var buttonColours = ["red","blue","yellow","green"];
var gamePattern = [];

var randomChoosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChoosenColour);

blinkAnimation(randomChoosenColour);



function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}

function blinkAnimation(randomColor) {
    $("#"+randomColor).fadeOut(100).fadeIn(100);

}

$(document).keypress(function () {
    var audio = new Audio("sounds/"+randomChoosenColour+".mp3");
    audio.play();
    console.log("sounds/"+randomChoosenColour+".mp3");
})