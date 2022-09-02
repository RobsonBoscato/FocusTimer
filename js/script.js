const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
let timerTimeOut;
const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');

let minutes = Number(minutesDisplay.textContent);

buttonPlay.addEventListener('click', handleButtonPlay);
buttonPause.addEventListener('click', handleButtonPause);
buttonStop.addEventListener('click', handleButtonStop);
buttonSoundOn.addEventListener('click', handleButtonSOundOn);
buttonSoundOff.addEventListener('click', handleButtonSOundOff);
buttonSet.addEventListener('click', handleButtonSet);

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    updateTimerDisplay(minutes, 0);

    if (minutes <= 0) {
      resetControls();
      return;
    }

    if (seconds <= 0) {
      seconds = 2;
      --minutes;
    }

    updateTimerDisplay(minutes, String(seconds - 1));
    countdown();
  }, 1000);
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function resetControls() {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  buttonSet.classList.remove('hide');
  buttonStop.classList.add('hide');
}

function resetTimer() {
  updateTimerDisplay(minutes, 0);
  clearTimeout(timerTimeOut);
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

  clearTimeout(timerTimeOut);
}

function handleButtonStop() {
  resetControls();
  resetTimer();
  console.log(minutes);
}

function handleButtonSOundOn() {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
}

function handleButtonSOundOff() {
  buttonSoundOn.classList.remove('hide');
  buttonSoundOff.classList.add('hide');
}

function inputValidation(n1) {
  console.log(n1);
  if (n1 => 1 || n1 == null) {
  } else {
    return false;
  }
  if (n1 == isNaN) {
    alert('Dados inseridos inválidos, insira um valor inteiro');
  }
}

function handleButtonSet() {
  let timerMinutes = prompt('Quantos minutos? ') || 0;

  if (!timerMinutes) {
    resetTimer();
    return;
  }
  minutes = timerMinutes;
  updateTimerDisplay(timerMinutes, 0);
}
