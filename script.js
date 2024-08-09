const sec = document.getElementById("secCounter");
const min = document.getElementById("minCounter");
const minlbl = document.getElementById("minlbl");
const seclbl = document.getElementById("seclbl");
const btn = document.getElementById("btn");
const timeUp = document.getElementById("soundup");
const timeRun = document.getElementById("soundrun");

let intervalId; 
let isRunning = false;

function updateMinutes(m){
  let minNum= String(m);
  if(minNum.length < 2) minNum = "0" + minNum;
  minlbl.textContent = minNum;
}

function updateSeconds(s){
  let secNum = String(s);
  if(secNum.length < 2) secNum = "0" + secNum;
  seclbl.textContent = secNum;
}

min.addEventListener('change',() => {
  updateMinutes(min.value);
});
sec.addEventListener('change',() => {
  updateSeconds(sec.value);
});

function countdown(minutes,seconds) {
  let min = minutes, sec = seconds;
  intervalId = setInterval(() => {
    if (sec < 1 ) {
      if(min > 0){
        min -= 1;
        sec += 60;
      }
      else{
      clearInterval(intervalId);
      timeRun.pause();
      timeUp.play();

      }
    }
    timeRun.play();
    sec--;
    updateSeconds(sec);
    updateMinutes(min);
  }, 1000);
}


// while(1) timeRun.play();

btn.onclick = function() {
  if(!isRunning){
    countdown(min.value,sec.value);
    isRunning = true;
  }
  else{
    clearInterval(intervalId);
    updateMinutes(min.value);
    updateSeconds(sec.value);
    isRunning = false;
  }
};
