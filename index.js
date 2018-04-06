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

function createCumulativeScores(scoreArray){
	// let newCumulativeScore = scoreArray[6] + scoreArray[7];
	// This shorthand is not working ...scoreArray[7] =+ scoreArray[6];
	let newCumulativeScore = scoreArray[7] + scoreArray[6];
	scoreArray[7] = newCumulativeScore;
	return scoreArray;
}

function totalScoreForThisRoll(randomDieRollArray){
	let rollScore = 0;
	if (randomDieRollArray[0] === 0){
		for(let index = 2; index < 6; index++){
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
	randomDieRollArray[6] = rollScore;
	return randomDieRollArray;
}

/* 
function getRandomDieValues(randomDieRollArray){
	randomDieRollArray = [Math.floor(Math.random() * 2), Math.floor(Math.random() * 4) + 1, Math.floor(Math.random() * 24) + 1, Math.floor(Math.random() * 48) + 1, Math.floor(Math.random() * 72) + 1, Math.floor(Math.random() * 96) + 1];
	return (randomDieRollArray);
}
*/

 function getRandomDieValues(randomDieRollArray){
	randomDieRollArray[0] = Math.floor(Math.random() * 2);
	randomDieRollArray[1] = Math.floor(Math.random() * 4) + 1;
	randomDieRollArray[2] = Math.floor(Math.random() * 24) + 1;
	randomDieRollArray[3] = Math.floor(Math.random() * 48) + 1;
	randomDieRollArray[4] = Math.floor(Math.random() * 72) + 1;
	randomDieRollArray[5] = Math.floor(Math.random() * 96) + 1;
	return (randomDieRollArray);
}

function runGame(){
	// let randomDieRollArray = [];
	let player = [0, 0, 0, 0, 0, 0, 0, 0];
	let computer = [0, 0, 0, 0, 0, 0, 0, 0];
	let roundsRequestedByPlayer = getUserInput("How many rounds would you like to play?");
	for(let index = 1; index <= roundsRequestedByPlayer; index++){
		displayAlert("Roll Dice\n         |\n         |\n         |\n         |\n         |\n         |\n          ------------------------------------------->");
		player = createCumulativeScores(totalScoreForThisRoll(getRandomDieValues(player)));
		computer = createCumulativeScores(totalScoreForThisRoll(getRandomDieValues(computer)));
		displayAlert("Score for Round #" + index + ":\n\n\nPlayer: " + player[6] + "          Grand Total: " + player[7] + "\n\nComputer: " + computer[6] + "          Grand Total: " + computer[7]);
	}
}


// displayResult(totalScoreForThisRoll(getRandomDieValues()));
runGame();

	