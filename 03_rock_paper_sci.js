let userInput = 'PAPER';

const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
return userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ? userInput : 'Your input is not valid, try again';
};

function getComputerChoice (){
  const randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber){
    case 0 : return 'rock';
    break;

    case 1 : return 'scissors';
    break;

    case 2 : return 'paper';
    break;
  };
}

function determineWinner (user, comp) {
  const uc = user;
  const cc = comp;
  
  if (uc === cc) {return 'This game is a tie';}

  else if ( 
        (uc === 'rock' && cc === 'paper') || 
        (uc === 'paper' && cc === 'scissors') || 
        (uc === 'scissors' && cc === 'rock')
      ) {return 'Computer win, better luck next time!'}

  else if ( 
        (cc === 'rock' && uc === 'paper') || 
        (cc === 'paper' && uc === 'scissors') || 
        (cc === 'scissors' && uc === 'rock') ||
        cc === 'bomb'
      ) {return 'Congratulation, you win!'}

  return 'Something\'s wrong'
}

function playGame () {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();

  console.log(`User's choice : ${userChoice}`);
  console.log(`Computer's choice : ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
