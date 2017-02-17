'use strict';

var setup = document.querySelector('.setup');
var setupOpener = document.querySelector('.setup-open');
var setupCloser = setup.querySelector('.setup-close');

setupOpener.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupCloser.addEventListener('click', function () {
  setup.classList.add('invisible');
});

var username = setup.querySelector('.setup-user-name');
username.required = true;
username.maxlength = 50;

var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var fireball = setup.querySelector('.setup-fireball-wrap');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRandomElement = function (array) {
  var randomElementIndex = Math.floor(Math.random() * array.length);
  return array[randomElementIndex];
};

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomElement(wizardCoatColors);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomElement(wizardEyesColors);
});

fireball.addEventListener('click', function () {
  fireball.style.background = getRandomElement(fireballColors);
});
