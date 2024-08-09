const sec = document.getElementById("secCounter");
const min = document.getElementById("minCounter");
const minlbl = document.getElementById("minlbl");
const seclbl = document.getElementById("seclbl");
const btn = document.getElementById("btn");

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

function countdown(min,sec) {

  intervalId = setInterval(() => {
    updateSeconds(sec);
    updateMinutes(min);
    sec--;
    if (sec < 0 ) {
      if(min > 0){
        min -= 1;
        sec += 60;
      }
      else{
      clearInterval(intervalId);
      }
    }
  }, 1000);
}


btn.onclick = function() {
  if(!isRunning){
    countdown(min.value,sec.value);
    isRunning = true;
  }
  else{
    clearInterval(intervalId);
    updateMinutes(0);
    updateSeconds(0);
    isRunning = false;
  }
};
