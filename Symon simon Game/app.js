let gameSeq = [];
let userSeq = [];
let btns = ['red', 'purple', 'yellow', 'green'];
let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress",function(){
    if (started== false){
        console.log("game Started");
started = true;
levelup();

    }
});

function btnFlash(btn) {
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},100);
}
function levelup() {
    userSeq = [];
    level++;
h2.innerText =`Level ${level}`;
//random btn choose
let randIdx = Math.floor(Math.random() *3);
 let randColor = btns[randIdx]; 
 let randBtn = document.querySelector(`.${randColor}`);
 gameSeq.push(randColor);
btnFlash(randBtn);
 }

 function checkAns(idx) {
   // console.log("current level :", level);

if(userSeq[idx]===gameSeq[idx]){
if (userSeq.length== gameSeq.length){
  setTimeout(levelup, 1000);
}
} else{
 h2.innerHTML = `Game Over! Your score was <b> ${level}</b> <br> Press any key to start.`; 
 document.querySelector("body").style.backgroundColor = 'red';
 setTimeout(function() {
    document.querySelector("body").style.backgroundColor = 'rgb(61, 57, 57)';
 
 }, 200);
 reset();   
}
 }

function btnPress() {
   let btn = this;
   btnFlash(btn); 
 userColor = btn.getAttribute("id");
   console.log( userColor);
userSeq.push(userColor);
checkAns(userSeq.length-1); 
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset (){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}