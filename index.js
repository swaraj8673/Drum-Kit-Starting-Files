// add click alert to the drum buttons

for (var i=0; i<(document.querySelectorAll(".drum")).length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", playTom1);

}

function playTom1() {
  var tom1Audio = new Audio("sounds/tom-1.mp3");
  tom1Audio.play();
}
