import ControlsFactory from './controls.js';
import resetControls from './controls.js';

import { TimerFactory } from './timer.js';

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');

let minutes = Number(minutesDisplay.textContent);

const controls = ControlsFactory({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
});

const configTimer = TimerFactory({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

buttonPlay.addEventListener('click', handleButtonPlay);
buttonPause.addEventListener('click', handleButtonPause);
buttonStop.addEventListener('click', handleButtonStop);
buttonSoundOn.addEventListener('click', handleButtonSOundOn);
buttonSoundOff.addEventListener('click', handleButtonSOundOff);
buttonSet.addEventListener('click', handleButtonSet);

function handleButtonPlay() {
  controls.play();
  configTimer.countdown();
}

function handleButtonPause() {
  controls.pause();
  configTimer.hold();
}

function handleButtonStop() {
  configTimer.resetTimer();
  controls.reset();
}

function handleButtonSOundOn() {
  controls.soundOn();
}

function handleButtonSOundOff() {
  controls.soundOff();
}

function handleButtonSet() {
  let newMinutes = controls.getMinutes();

  if (!newMinutes) {
    configControls.reset();
    return;
  }

  minutes = newMinutes;
  configTimer.updateMinutes(minutes);
  configTimer.updateDisplay(minutes, 0);
}
