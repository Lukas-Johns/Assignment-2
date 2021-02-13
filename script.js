document.getElementById('DP').addEventListener('click',  myButton)
document.getElementById('UH').addEventListener('click',  myImage)
document.getElementById('VB').addEventListener('click',  myDisplay)
document.getElementById('GB').addEventListener('click',  myPost)
document.getElementById('GW').addEventListener('click',  myFunction)

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