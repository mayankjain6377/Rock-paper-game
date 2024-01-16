let btns = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".reset");
let second = document.querySelector(".win");
let newgame = document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg");
let gif = document.querySelector(".image");
let gif2=document.querySelector(".image2");
let draw2=document.querySelector(".draw");
let hide2=document.querySelector(".hide2");
let turn0 = true;
let count = 0;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
btns.forEach((btn) => {
    btn.addEventListener("click", () =>  {
        if (turn0) {
            btn.innerText = "O";
             btn.style.color="red";
            turn0 = false;
        }
        else {
            btn.innerText = "X";
            btn.style.color="blue";
            turn0 = true;
        }
        btn.disabled = true;
        count++;
        checkwinner();
        let iswinner = checkwinner();
        if (count === 9 && !iswinner) {
          gameDraw();
        }
    });
});
const disableboxes = () => {
    for (let btn of btns) {
        btn.disabled = true;
    }
};
const resetgame=()=>{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    draw2.classList.add("hide2");
};
const gameDraw = () => {
    draw2.classList.remove("hide2");
    disableboxes();
  };
const enableboxes=()=>
{
    for (let btn of btns) {
        btn.disabled = false;
        btn.innerText="";
    }
};
const showwinner = (winner) => {
    msg.innerText = `Congratulations ,Winner is ${winner} 👌✌️`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = btns[pattern[0]].innerText;
        let pos2val = btns[pattern[1]].innerText;
        let pos3val = btns[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
            }
        }
    }
};
newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
