/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myVariable = 'Bob';

myVariable = 'Steve';

let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}*/

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

document.querySelector('html').onclick = function()
  es igual a
let myHTML = document.querySelector('html');
myHTML.onclick = function() {};


let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'Imagenes/firefox-logo-huge.jpg') {
    myImage.setAttribute('src', 'Imagenes/firefox1600.png');
  } else {
    myImage.setAttribute('src', 'Imagenes/firefox-logo-huge.jpg');
  }
}*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt ('Please enter your name');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  } 
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}