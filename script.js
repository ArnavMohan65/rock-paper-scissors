
//the below algorihtam uses the naive approach for rock,paper,scissors using strings
function getComputerChoice(){
    let random = Math.floor((Math.random() * 10) + 1);
    // console.log(random);
    if(random <= 3){
        return 'rock';
    }else if(random > 3 && random <= 6){
        return 'paper';
    }else if(random > 6){
        return 'scissors';
    }else{
        alert('Enter a valid numebr');
    }
}

function playRound(computerSelection, playerSelection){
    
    let userwinner = true;
    playerSelection = prompt('Enter your choice');
    if(playerSelection === computerSelection)
    {
        console.log('Its a tie');
        console.log('replay the round');
        return;
    }else if(playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors'){
        console.log('Rock beats Paper, You are the Winner!');
        return userwinner;
    }
    else if(playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock'){
        console.log('paper beats scissors, You are the Winner!');
        return userwinner;
    }else if(playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors'){
        console.log('Enter whats valid');
    }
    else{
        console.log('Computer is the winner');
        console.log(`your choice : ${playerSelection} \n computer choice ${computerSelection}`);
        userwinner = false;
        return userwinner;
    }
}


function game(){
    let playerScore = 0;let computerScore = 0;
    for(let i = 0; i < 5; i++)
    {
        let playerChoice;
        let result = playRound(getComputerChoice(),playerChoice);
        if(result == true){
            playerScore += 1;
            console.log('playerScore : ' + playerScore);
        }else{
            computerScore += 1;
            console.log('computerScore ' + computerScore);
        }
    }
    if(playerScore > computerScore)
    {
        console.log('player is the winner ' + playerScore);
    }else{
        console.log('computer is the winnner ' + computerScore);
    }
}

game()