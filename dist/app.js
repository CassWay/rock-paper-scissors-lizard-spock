let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreboard_div = document.querySelector('.scoreboard');
const result_p = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const lizard_div = document.getElementById('l');
const spock_div = document.getElementById('sp');

function getComputerChoice() {
	const choices = ['r', 'p', 's', 'l', 'sp'];
	const randomNumber = Math.floor(Math.random() * 5);
	return choices[randomNumber];
}
function convertToWord(letter) {
	if (letter === 'r') return 'Rock';
	if (letter === 'p') return 'Paper';
	if (letter === 's') return 'Scissors';
	if (letter === 'l') return 'Lizard';
	if (letter === 'sp') return 'Spock';
}

function win(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(
		computerChoice
	)} . You WIN!!`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(
		userChoice
	)} . You Lose!`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(
		userChoice
	)} is equal to ${convertToWord(computerChoice)} . Its a Draw.`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case 'sp': //scissors cut paper
		case 'pr': //paper covers rock
		case 'rs': //rock crushes scissors
		case 'sl': //scissors decap lizard
		case 'rl': //rock crushes lizard
		case 'lp': //lizard eats paper
		case 'lsp': //lizard poisons spock
		case 'sps': //spock smashes scissors
		case 'psp': //paper disproves spock
		case 'spr': //spock vaporizes rock
			win(userChoice, computerChoice);
			break;
		case 'ps': //paper cut by scissors
		case 'rp': //rock covered by paper
		case 'sr': //scissors crushed by rock
		case 'ls': // lizard decapitated by scissors
		case 'lr': //lizard crushed by rock
		case 'pl': //paper eaten by lizard
		case 'spl': //spock poisoned by lizard
		case 'ssp': //scissors smashed by spock
		case 'spp': //spock disproved by paper
		case 'rsp': //rock vaporized by spock
			lose(userChoice, computerChoice);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
		case 'll':
		case 'spsp':
			draw(userChoice, computerChoice);
	}
}

function main() {
	rock_div.addEventListener('click', () => game('r'));
	paper_div.addEventListener('click', () => game('p'));
	scissors_div.addEventListener('click', () => game('s'));
	lizard_div.addEventListener('click', () => game('l'));
	spock_div.addEventListener('click', () => game('sp'));
}

main();
