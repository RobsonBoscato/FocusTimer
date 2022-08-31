const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
let timerMinutes;

const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');

buttonPlay.addEventListener('click', handleButtonPlay);
buttonPause.addEventListener('click', handleButtonPause);
buttonStop.addEventListener('click', handleButtonStop);
buttonSoundOn.addEventListener('click', handleButtonSOundOn);
buttonSoundOff.addEventListener('click', handleButtonSOundOff);

function countdown() {
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);

    if (seconds <= 0) {
      seconds = 60;
    }

    secondsDisplay.textContent = seconds - 1;
    countdown();
  }, 1000);
}

function handleButtonPlay() {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonSet.classList.add('hide');
  buttonStop.classList.remove('hide');

  countdown();
}

function handleButtonPause() {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
}

function handleButtonStop() {
  buttonStop.classList.add('hide');
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonSet.classList.remove('hide');
}

function handleButtonSOundOn() {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
}

function handleButtonSOundOff() {
  buttonSoundOn.classList.remove('hide');
  buttonSoundOff.classList.add('hide');
}
