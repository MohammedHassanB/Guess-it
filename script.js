'use strict';
let randomNumber=Math.trunc(Math.random()*20)+1;
console.log(randomNumber);
let initScore=20;
let heighScore=0;
const message=function(message)
{
  document.querySelector(".message").textContent=message;
}
document.querySelector(".check").addEventListener("click",function()
{
const inputval=Number(document.querySelector(".guess").value);

if(!inputval)
{
  message("⛔️ No number!!");
}
else if(inputval===randomNumber)
 {
  message("🎉 Correct Number!");
  if(initScore>heighScore)
  {
    heighScore=initScore;
    document.querySelector(".highscore").textContent=heighScore;
  }
  document.querySelector("body").style.backgroundColor="#60b347";
  document.querySelector(".number").style.width='30rem';
  document.querySelector(".number").textContent=randomNumber;
 }
 else if(inputval!==randomNumber)
 {
  if(initScore>1)
  {
    initScore--;
    document.querySelector(".score").textContent=initScore;
    message(inputval>randomNumber?'📈 Too high!' : '📉 Too low!');
  }
  else
  {
    message("💥 You lost the game!");
    document.querySelector(".score").textContent=0;
  }
 }
}
);

const restSetting=function()
{
  randomNumber=Math.trunc(Math.random()*20)+1;
  console.log(randomNumber);
  document.querySelector(".number").textContent="?";
  document.querySelector(".guess").value=" ";
  message("Start guessing...");
  document.querySelector("body").style.backgroundColor="#222";
  document.querySelector(".number").style.width='15rem';
  initScore=20;
  document.querySelector('.score').textContent = initScore;
}

document.querySelector(".again").addEventListener("click",function()
{
  restSetting();
}
);
document.querySelector(".reset").addEventListener("click",function()
{
  restSetting();
  heighScore=0;
  document.querySelector(".highscore").textContent=heighScore;  
}
);