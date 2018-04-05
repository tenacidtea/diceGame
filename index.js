"use strict";

function displayResult(dataToBeDisplayed){
	console.log(dataToBeDisplayed);
}

// displayResult("Hello World");

function displayAlert(alertToBeDisplayed){
	alert(alertToBeDisplayed);
}

function getUserInput(message){
	let response = prompt(message);
	return response;
}

function totalScoreForThisRoll(randomDieRollArray){
	let rollScore = 0;
	if (randomDieRollArray[0] === 0){
		for(let index = 2; index < randomDieRollArray.length; index++){
			rollScore =+ rollScore + randomDieRollArray[index];
		}
	}
	else {
		if (randomDieRollArray[1] === 1){
			rollScore = randomDieRollArray[2];
		}
		else if (randomDieRollArray[1] === 2){
			rollScore = randomDieRollArray[3];
		}
		else if (randomDieRollArray[1] === 3){
			rollScore = randomDieRollArray[4];
		}
		else {
			rollScore = randomDieRollArray[5];
		}
	}
	return rollScore;
}

function getRandomDieValues(){
	let randomDieRollArray = [];
	randomDieRollArray[0] = Math.floor(Math.random() * 2);
	randomDieRollArray[1] = Math.floor(Math.random() * 4) + 1;
	randomDieRollArray[2] = Math.floor(Math.random() * 24) + 1;
	randomDieRollArray[3] = Math.floor(Math.random() * 48) + 1;
	randomDieRollArray[4] = Math.floor(Math.random() * 72) + 1;
	randomDieRollArray[5] = Math.floor(Math.random() * 96) + 1;

	return (randomDieRollArray);
}

function runGame(){
	let roundsRequestedByPlayer = getUserInput("How many rounds would you like to play?");
	for(let index = 1; index <= roundsRequestedByPlayer; index++){
		let player = totalScoreForThisRoll(getRandomDieValues());
		let computer = totalScoreForThisRoll(getRandomDieValues());
		displayAlert("Score for Round #" + index + ":\n\n\nPlayer: " + player + "\n\nComputer: " + computer);
	}
}


// displayResult(totalScoreForThisRoll(getRandomDieValues()));
runGame();

	