

let home=document.querySelector('.home')
let game=document.querySelector('.game')
let gameBtn=document.querySelector('.button')
let myScore=document.querySelector('.userscore')
let compScore=document.querySelector('.computerscore')
let winResult = document.querySelector('#win');
let loseResult = document.querySelector('#lose');

function playGame() {
    home.style.display = "none";
    game.style.display = "block";
  }

//oyun kodlari

function checkGame(element) {
 
    myScore.textContent = element
    let compElement=comp()
    compResult( compElement);
    result(element, compElement);
    reset() 
}
function comp() {
    let arr = ['rock', 'paper', 'scissor'];
    let randomIndex = Math.floor(Math.random() * arr.length);
 return arr[randomIndex]
}

function compResult() {
    let computerResult = comp();
    compScore.textContent = computerResult;
}


let myPoint = 0;
let compPoint = 0;

function result(myScore, compScore) {
    if (
        (myScore === "rock" && compScore === "scissor") ||
        (myScore === "paper" && compScore === "rock") ||
        (myScore === "scissor" && compScore === "paper")
    ) {
        myPoint++;
        winResult.textContent = myPoint;
    } else if (
        (compScore === "rock" && myScore === "scissor") ||
        (compScore === "paper" && myScore === "rock") ||
        (compScore === "scissor" && myScore === "paper")
    ) {
        compPoint++;
        loseResult.textContent = compPoint;
    }
    else if( 
    (compScore === "rock" && myScore === "rock") ||
    (compScore === "paper" && myScore === "paper") ||
    (compScore === "scissor" && myScore === "scissor")

    ){
        winResult.innerHTML = myPoint;
        loseResult.innerHTML = compPoint;
    }
}
  
function reset() {
    if(myPoint==4 ||  compPoint==4){
        myPoint = 0;
        compPoint = 0;
        winResult.innerHTML = myPoint;
        loseResult.innerHTML = compPoint;

    }
    }
    



function showWinnerAnimation() {
    let winnerElement = document.querySelector('.winner');
    winnerElement.classList.add('show');
    setTimeout(() => {
        winnerElement.classList.remove('show');
    }, 2000); 
}





