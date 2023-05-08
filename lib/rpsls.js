export {rps, rpsls};

let gameRules = {
	Rock: {
		Rock: 'draw',
		Scissors: 'lose',
		Paper: 'win',
		Spock: 'win',
		Lizard: 'lose'
	},
	Paper: {
		Paper: 'draw',
		Rock: 'lose',
		Scissors: 'win',
		Lizard: 'win',
		Spock: 'win'
	},
	Scissors: {
		Scissors: 'draw',
		Paper: 'lose',
		Rock: 'win',
		Lizard: 'lose',
		Spock: 'win'
	},
	Lizard: {
		Scissors: 'win',
		Paper: 'lose',
		Rock: 'win',
		Lizard: 'draw',
		Spock: 'lose'
	},
	Spock: {
		Scissors: 'lose',
		Paper: 'win',
		Rock: 'lose',
		Lizard: 'win',
		Spock: 'draw'
	}
}

function rps(input) {
	let choices = ["rock","paper","scissors"];
	let randomChoice = Math.trunc(Math.random() * 3);
	let opp_choice = choices[randomChoice];
	let user_input = input.toLowerCase();
	let result = "";

	if (input === undefined) {
		return {"Player": opp_choice};
	}

	if (!choices.include(user_input)) {
		console.error(user_input + " is out of range.");
	}

	switch(gameRules[opp_choice][user_input]) {
		case 'win':
			result = "win";
			break;
		case 'lose':
			result = "lose";
			break;
		case 'draw' :
			result = "draw";
			break;
	}

	return {"Player": user_input, 
		"opponent": opp_choice, 
		"result": result};
}

function rpsls(input) {
	let choices = ["rock", "paper", "scissors", "lizard", "spock"];
	let randomChoice = Math.trunc(Math.random() * 5);
	let opp_choice = choices[randomChoice];
	let user_input = input.toLowerCase();
	let result = "";

	if (input === undefined) {
		return {"Player": opp_choice};
	}

	if (!choices.include(user_input)) {
		concole.error(user_input + " is out of range.");
	}

	switch(gameRules[opp_choice][user_input]) {
		case 'win':
			result = "win";
			break;
		case 'lose':
			result = "lose";
			break;
		case 'draw':
			result = "draw";
			break;
	}

	return {"Player": user_input, 
		"opponent": opp_choice,
		"result": result};
}
