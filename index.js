// add click alert to the drum buttons

for (var i=0; i<(document.querySelectorAll(".drum")).length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", HandleClick);

}

function HandleClick() {
  alert("Hello, I got clicked!");
}
