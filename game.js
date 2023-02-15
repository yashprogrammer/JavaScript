// alert("Hey! There");
// console.log($("h1").text("Change using JQUERY"));


var buttonColours = ["red","blue","yellow","green"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

var randomChoosenColour;
var gameOver = false;





document.addEventListener("touchstart",function (e) {
    if (level==0) {
        nextSequence();
       
        console.log(randomChoosenColour);

    }
})


$(document).keypress(function () {
    if (level==0) {
        nextSequence();
       
        console.log(randomChoosenColour);

    }
})

$(".btn").click(function(event){
    if (level>0) {
        var userChosenColor = event.target.id;
        userClickedPattern.push(userChosenColor);
      
        playSound(userChosenColor);
        blinkAnimation(userChosenColor);
        checkAnswer(userClickedPattern.length-1);

        
    }
})




function nextSequence() {
    
    var randomNumber = Math.floor(Math.random()*4);
    randomChoosenColour = buttonColours[randomNumber];
    blinkAnimation(randomChoosenColour);
    playSound(randomChoosenColour);
    gamePattern.push(randomChoosenColour);
    level++;
    $("#level-title").text("level "+level);
}

function blinkAnimation(randomColor) {
    $("#"+randomColor).fadeOut(100).fadeIn(100);

}

function playSound(color) {
    var audio = new Audio("sounds/"+color+".mp3");
    audio.play();
}

function checkAnswer(currentLevel) {
    console.log(gamePattern,userClickedPattern,currentLevel);
    if (gamePattern[currentLevel]===userClickedPattern[currentLevel]) {
        console.log("sucess");
    }
    else{
        playSound("wrong");
        $("body").toggleClass("game-over");
        $("#level-title").text("Game Over, Reload to play again!")
        gameOver = true;
    }

    if (gamePattern.length === userClickedPattern.length && !gameOver) {
        setTimeout(nextSequence,1000);
        userClickedPattern =[];
    }

    

}

