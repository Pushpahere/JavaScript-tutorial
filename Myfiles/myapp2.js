const button1 = document.getElementById('btn1');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
let gameIsRunning = false;

const userChoice = function () {
	const selection = prompt(
		`${ROCK}, ${PAPER} or ${SCISSORS}`,
		' '
	).toUpperCase();
	console.log(selection);
	if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
		alert(` Invalid choice, we have chosen ${DEFAULT} for you`);
		return DEFAULT;
	}
	return selection;
};

const getChoice = function () {
	const randomValue = Math.random();

	if (randomValue < 0.34) {
		return ROCK;
	} else if (randomValue < 0.67) {
		return PAPER;
	} else {
		return SCISSORS;
	}
};

// const getWinner = function (cChoice, pChoice) {
    // 	if (cChoice === pChoice) {
    // 		return RESULT_DRAW;
    // 	} else if (
    // 		(cChoice === ROCK && pChoice === PAPER) ||
    // 		(cChoice === PAPER && pChoice === SCISSORS) ||
    // 		(cChoice === SCISSORS && pChoice == ROCK)
    // 	) {
    // 		return RESULT_PLAYER_WINS;
    // 	} else {
    // 		return RESULT_COMPUTER_WINS;
    // 	}
    // };

const getWinner = (cChoice, pChoice) => {

    return cChoice === pChoice
        ? RESULT_DRAW
        :
        (cChoice === ROCK && pChoice === PAPER) ||
            (cChoice === PAPER && pChoice === SCISSORS) ||
            (cChoice === SCISSORS && pChoice == ROCK)
            ? RESULT_PLAYER_WINS
            :
            RESULT_COMPUTER_WINS;
}    
        
    
button1.addEventListener('click', () => {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	console.log('Game is starting...');
	const playerChoice = userChoice();
	const computerChoice = getChoice();
	const winner = getWinner(computerChoice, playerChoice);
	console.log(
		'Player   : ' +
			playerChoice +
			'\nComputer : ' +
			computerChoice +
			'\nWinner is :' +
			winner
    );
    gameIsRunning = false;
});
