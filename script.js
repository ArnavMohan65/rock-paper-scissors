// console.log("hello world");
const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');

const choiceButtons = document.querySelectorAll('.choice');
let player;
let computer;
let result;

choiceButtons.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    getComputerChoice();
    playerText.textContent =  `you : ${player}`;
    computerText.textContent = `computer : ${computer}`;
    resultText.textContent = playRound();
}));
//return the computer choice for result declaration
function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;
    // console.log(random);
    switch(random){

        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissor";
            break;
    }
}

function playRound(){

    // console.log('Player played a round');
    // let userwinner = true;
    // playerSelection = prompt('Enter your choice');
    // const result = document.querySelector('#result').firstChild();
     
    if(player == computer)
    {
        // console.log('Its a tie');
        // console.log('replay the round');
        // result.textContent = "It's a tie";
        // result.textContent = "let's play another round";
        return "Draw";
    }else if(computer == 'Rock'){
        // console.log('Rock beats Paper, You are the Winner!');
        // result.textContent = "Rock beats Paper, You are the Winner!";
        // return "Rock beats Paper, You are the Winner!";
        return (player == 'Paper')? 'You Win!' : 'You Lose!';
    }
    else if(computer == 'Paper'){
        // console.log('paper beats scissors, You are the Winner!');
        // result.textContent = "paper bets scissors, You are the Winner!";
        // return "Paper bets scissors, You are the Winner!";
        return (player == 'Scissors') ? 'You Win!' : 'You Lose!';
    }else if(computer = 'Scissors'){
        // console.log('Enter whats valid');
        // result.textContent = "Enter What's valid";
        return (player == 'Rock') ? 'You Win!' : 'You Lose!';
    }
}


// function game(playerChoice){
//     let playerScore = 0;let computerScore = 0;
//     // const p = document.createElement('p');
//     // const displayResult = document.querySelector('.result');
//     // displayResult.appendChild(p);
//     // document.body.appendChild(displayResult);
//     let result = playRound(getComputerChoice(),playerChoice);

//     if(result){
//         playerScore += 1;
//         // console.log('playerScore : ' + playerScore);
//         //let textContent = `Player score : ${playerScore} \n Computer score : ${computerScore}`;
//         // p.append(`Player score : ${playerScore} \n Computer score : ${computerScore}`);
//     }else{
//         computerScore += 1;
//         // console.log('computerScore ' + computerScore);
//         //p.textContent = `Player score : ${playerScore} \n Computer score : ${computerScore}`;
//         // p.append(`Player score : ${playerScore} \n Computer score : ${computerScore}`);
//     }

//     if(playerScore == 5 || computerScore == 5)
//     {
//         // console.log('player is the winner ' + playerScore);
//         //p.textContent = "Winner has reached 5 points";
//         // p.append("Winner has reached 5 points");
//     }// console.log('computer is the winnner ' + computerScore);
// }


// game()