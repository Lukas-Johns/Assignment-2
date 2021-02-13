document.getElementById('dp').addEventListener('click', myButton)
document.getElementById('uh').addEventListener('click', myImage)
document.getElementById('vb').addEventListener('click', myDisplay)
document.getElementById('gb').addEventListener('click', myPost)
document.getElementById('gw').addEventListener('click', myFunction)
function myButton() {
  document.getElementById('New').src = './images/D-pad.jpeg';
}
function myImage() {
  document.getElementById('New').src = './images/Ultra_Hand.png';
}
function myDisplay() {
  document.getElementById('New').src = './images/virtual_boy.jpeg';
}
function myPost() {
  document.getElementById('New').src = './images/Gameboy.jpeg';
}
function myFunction() {
  document.getElementById('New').src = './images/Game_And_Watch.png'
}
