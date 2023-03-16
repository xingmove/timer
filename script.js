const exerciseTimeInput = document.getElementById("exercise-time");
const restTimeInput = document.getElementById("rest-time");
const setsInput = document.getElementById("sets");
const startTimerButton = document.getElementById("start-timer");
const timerDisplay = document.getElementById("timer-display");

startTimerButton.addEventListener("click", () => {
  const exerciseTime = parseInt(exerciseTimeInput.value);
  const restTime = parseInt(restTimeInput.value);
  const sets = parseInt(setsInput.value);

  if (isNaN(exerciseTime) || isNaN(restTime) || isNaN(sets)) {
    alert("올바른 값을 입력하세요.");
    return;
  }

  startTimer(exerciseTime, restTime, sets);
});

function startTimer(exerciseTime, restTime, sets) {
  let timeLeft = 15; // 준비 시간
  let currentSet = 0;
  let isResting = false;

  timerDisplay.textContent = "준비 중... " + timeLeft + "초";
  timerDisplay.classList.remove("hidden");

  const interval = setInterval(() => {
    if (timeLeft === 5) {
      playAlertSound();
    }

    if (timeLeft > 0) {
      timeLeft--;
    } else {
      currentSet++;
      if (currentSet > sets) {
        clearInterval(interval);
        timerDisplay.textContent = "운동 완료!";
        return;
      }

      isResting = !isResting;
      timeLeft = isResting ? restTime : exerciseTime;
    }

    if (isResting) {
      timerDisplay.textContent = `휴식 중... ${timeLeft}초 (세트 ${currentSet})`;
    } else {
      timerDisplay.textContent = `운동 중... ${timeLeft}초 (세트 ${currentSet})`;
    }
  }, 1000);
}

function playAlertSound() {
  // 알림음 재생 코드
}
