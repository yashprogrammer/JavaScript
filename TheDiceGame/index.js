// Randomly Generating Dice Output for Player1


var randomNumber1;

// Generating a random Number between 1 to 6(included)
randomNumber1 = Math.floor(Math.random() * 6) +1;

var player1Dice = document.querySelector(".img1");

var player1DiceSrc = "images/dice" + randomNumber1 +".png";

player1Dice.setAttribute("src", player1DiceSrc);


// // Randomly Generating Dice Output for Player2

var randomNumber2;

// Generating a random Number between 1 to 6(included)
randomNumber2 = Math.floor(Math.random() * 6) +1;

var player2Dice = document.querySelector(".img2");

var player2DiceSrc = "images/dice" + randomNumber2 +".png";

player2Dice.setAttribute("src", player2DiceSrc);


//Choosing Winner

pickWinner();

function pickWinner(){
    if (randomNumber1>randomNumber2){
        document.querySelector(".title").innerHTML = `<i class="fa-solid fa-flag-checkered flag"></i> Player 1 Wins`;
    }

    else if(randomNumber2>randomNumber1){
        document.querySelector(".title").innerHTML = `Player 2 Wins <i class="fa-solid fa-flag-checkered flag"></i>`;
    }
    else{
        document.querySelector(".title").innerHTML = `It's a Draw`;
    }
}