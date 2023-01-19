var btnList =  document.querySelectorAll(".drum");

//Traversing the btnList
for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener("click", function(){alert("You have pressed btn no = "+i)})
    
}

