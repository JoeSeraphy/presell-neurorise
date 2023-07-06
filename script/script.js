const startingMinutes = 15;
let time = startingMinutes * 60;

const timerMinutes = document.getElementById("minutes");
const timerSeconds = document.getElementById("seconds");

setInterval(updateTimer, 1000);

function updateTimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  timerMinutes.innerHTML = `${minutes}`;
  timerSeconds.innerHTML = `${seconds}`;

  time--;
}
