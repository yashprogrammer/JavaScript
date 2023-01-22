var btnList = document.querySelectorAll(".drum");

//Traversing the btnList
for (let i = 0; i < btnList.length; i++) {
  btnList[i].addEventListener("click", function () {
    var btnInnerHTML = this.innerHTML;
    buttonAnimation(btnInnerHTML)
    //    alert(btnInnerHTML);
    switch (btnInnerHTML) {
      case "w":
        var tom_1 = new Audio("sounds/tom-1.mp3");
        tom_1.play();
        break;

      case "a":
        var tom_2 = new Audio("sounds/tom-2.mp3");
        tom_2.play();
        break;

      case "s":
        var tom_3 = new Audio("sounds/tom-3.mp3");
        tom_3.play();
        break;
      case "d":
        var tom_4 = new Audio("sounds/tom-4.mp3");
        tom_4.play();
        break;
      case "j":
        var kick_bass = new Audio("sounds/kick-bass.mp3");
        kick_bass.play();
        break;
      case "k":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "l":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      default:
        
        break;
    }
  });
}

document.addEventListener("keydown",function(event){
  buttonAnimation(event.key);
  switch (event.key) {
    case "w":
      var tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      break;

    case "a":
      var tom_2 = new Audio("sounds/tom-2.mp3");
      tom_2.play();
      break;

    case "s":
      var tom_3 = new Audio("sounds/tom-3.mp3");
      tom_3.play();
      break;
    case "d":
      var tom_4 = new Audio("sounds/tom-4.mp3");
      tom_4.play();
      break;
    case "j":
      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;
    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      
      break;
  }
})

// creating button press animation

function buttonAnimation(pressedkey){
  
  pressedBtn = document.querySelector("."+pressedkey);
  pressedBtn.classList.add("pressed"); 

  setTimeout(function(){
    pressedBtn.classList.remove("pressed");
  },50)
}


