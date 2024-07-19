
let count = 0;

const incButton = document.getElementById("incBtn");
const decButton = document.getElementById("decBtn");
const resButton = document.getElementById("rstBtn");
const counter = document.getElementById("countLabel")

incButton.onclick = function(){
    count++;
    counter.textContent=count;
}

decButton.onclick= function(){
    count++;
    counter.textContent=count;
}

resButton.onclick = function(){
    count=0;
    counter.textContent=count;
}