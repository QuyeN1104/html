
const increasing = document.getElementById("inc");
const decreasing = document.getElementById("dec");
const reset = document.getElementById("res");
const label = document.getElementById("label");
let count = 0;
increasing.onclick = function(){
    count++;
    label.textContent = count;
}
decreasing.onclick = function(){
    count--;
    label.textContent = count;
}
reset.onclick = function(){
    count = 0;
    label.textContent = count;
}