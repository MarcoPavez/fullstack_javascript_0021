let intervalId;
    let secondsRemaining = 0;

    function startTimer() {
      const input = document.getElementById('secondsInput');
      secondsRemaining = parseInt(input.value);
      clearInterval(intervalId);
      intervalId = setInterval(decrementTimer, 1000);
    }

    function cancelTimer() {
      clearInterval(intervalId);
      secondsRemaining = 0;
      updateTimerDisplay();
    }

    function decrementTimer() {
      if (secondsRemaining > 0) {
        secondsRemaining--;
        updateTimerDisplay();
      } else {
        clearInterval(intervalId);
      }
    }

    function updateTimerDisplay() {
      const minutes = Math.floor(secondsRemaining / 60);
      const seconds = secondsRemaining % 60;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
      document.getElementById('timer').textContent = `${minutes}:${formattedSeconds}`;
    }