let clicked = false;

function button1() {
  clicked = !clicked;
  if (clicked) {
    document.getElementById("hola").style = "color: green";
  } else {
    document.getElementById("hola").style = "color: red";
  }
}
