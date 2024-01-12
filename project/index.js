let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');


let drawGame = ()=>{
    console.log('Game was Drawn');
    msg.innerText = 'Game was Drawn';
    msg.style.backgroundColor = '#1F4172'
    
}


const getCompChoices = ()=>{

    const options = ['rock','paper','scissors'];
    let randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log('Hurrah! you win');
        msg.innerText = `Hurrah! you win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green'
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log('You lose')
        msg.innerText = `You lose! try again. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = 'red'
    }

}


const playGame = (userChoice)=>{
    console.log('user choice : ',userChoice);
    let compChoice = getCompChoices();
    console.log('comp choice : ',compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==='rock'){
            // paper , scissors
            userWin =  compChoice==='paper' ? false :  true;
        }
        else if(userChoice==='paper'){
            //rock , scissors
            userWin = compChoice==='rock' ? true : false;
        }
        else{
            // rock,paper
            userWin = compChoice==='rock' ? false :  true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

   

}

choices.forEach(choice => {
    choice.addEventListener('click',()=>{
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
    
});