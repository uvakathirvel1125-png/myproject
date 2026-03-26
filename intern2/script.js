let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let running = false;

function timeToString(time) {
  let ms = time % 1000;
  let totalSeconds = Math.floor(time / 1000);
  let seconds = totalSeconds % 60;
  let minutes = Math.floor(totalSeconds / 60) % 60;
  let hours = Math.floor(totalSeconds / 3600);

  return (
    String(hours).padStart(2, '0') + ":" +
    String(minutes).padStart(2, '0') + ":" +
    String(seconds).padStart(2, '0') + "." +
    String(ms).padStart(3, '0')
  );
}

function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

function startStop() {
  if (!running) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);

    document.getElementById("startBtn").innerText = "Pause";
    running = true;
  } else {
    clearInterval(timerInterval);
    document.getElementById("startBtn").innerText = "Start";
    running = false;
  }
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00.000");
  elapsedTime = 0;
  running = false;
  document.getElementById("startBtn").innerText = "Start";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (running) {
    const li = document.createElement("li");
    li.textContent = timeToString(elapsedTime);
    document.getElementById("laps").appendChssssssild(li);
  }
}