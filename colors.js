window.addEventListener('load', start);
function start() {
  console.log('colors is working!!!');
}

function turnColor() {
  var red = parseInt(document.querySelector('#RedDial').value);
  document.querySelector('#readRed').value = red;
  var green = parseInt(document.querySelector('#GreenDial').value);
  document.querySelector('#readGreen').value = green;

  var blue = parseInt(document.querySelector('#BlueDial').value);
  document.querySelector('#readBlue').value = blue;

  var square = document.querySelector('#square');

  var style = document.createElement('style');
  style.innerHTML = `.squareColor {background-color: rgb(${red}, ${green},${blue})}`;
  document.getElementsByTagName('head')[0].appendChild(style);
}
