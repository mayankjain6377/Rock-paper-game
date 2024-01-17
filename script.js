let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
let tap =document.querySelectorAll(".choice");
// const tap=document.querySelector(".choice");
let user=document.querySelector("#userscore");
let comp=document.querySelector("#compscore");
let msg=document.querySelector("#msg");
let hide=document.querySelector(".draw")
let hide1=document.querySelector(".draw1");
let win=document.querySelector(".win");
let win1=document.querySelector(".win1");
let win2=document.querySelector(".win2");
const gencomputerchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};
const playgame = (userchoice) => {
    const compchoice = gencomputerchoice();
    if (userchoice === compchoice) {
        msg.innerText="Game is draw , Try Again";
        msg.style.backgroundColor="rgb(30, 26, 22)";

    }
    if (userchoice == "rock" && compchoice == "scissors" || userchoice == "scissors" && compchoice == "paper" || userchoice == "paper" && compchoice == "rock") {

        user.innerText=   userscore=userscore+1;
        msg.innerText=`You Win!, ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="#2b8720";
    }
    else if (userchoice != compchoice)
    {
        comp.innerText=compscore=compscore+1;
        msg.innerText=`You Lose, ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="#631717";
    }
    if(userscore===10)
    {
        win1.classList.remove("win1");
        user.innerText=0;
        comp.innerText=0;
userscore=0;
compscore=0 ;
    }
    else if(compscore===10){
        win2.classList.remove("win2");
user.innerText=0;
comp.innerText=0;

        userscore=0;
compscore=0;
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        win1.classList.add("win1");
        win2.classList.add("win2");
        playgame(userchoice);
    });
});


