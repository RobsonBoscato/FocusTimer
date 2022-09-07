export function TimerFactory({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);
  let isFinished = minutes <= 0 && seconds <= 0;

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);

      updateDisplay(minutes, 0);

      if (isFinished) {
        resetControls();
        updateDisplay();
        return;
      }

      if (seconds <= 0) {
        seconds = 5;

        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));
      countdown();
    }, 1000);
  }

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  }

  function resetTimer() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  return {
    countdown,
    resetTimer,
    updateDisplay,
    updateMinutes,
    hold,
  };
}
