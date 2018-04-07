"use strict";

function displayResult(dataToBeDisplayed){
	console.log(dataToBeDisplayed);
}

function displayAlert(alertToBeDisplayed){
	alert(alertToBeDisplayed);
}

function getUserInput(message, validator){
	let playerResponse = prompt(message);
	if(validator(playerResponse)){
		return playerResponse;
	}
	else{
	return getUserInput(message, validator);
	}
}

function validateForPositiveIntegerInput(playerResponse){
	if(playerResponse >>> 0 === parseFloat(playerResponse)){
		return true;
	}
	else{
		displayAlert("User input must be a positive integer between 1 and infinity.  Please re-enter");
		return false;
	}
}

function createCumulativeScores(scoreArray){
	// This shorthand is not working ...scoreArray[7] =+ scoreArray[6];
	let newCumulativeScore = scoreArray[7] + scoreArray[6];
	scoreArray[7] = newCumulativeScore;
	return scoreArray;
}

function totalScoreForThisRoll(randomDieRollArray){
	let rollScore = 0;
	if(randomDieRollArray[0] === 0){
		for(let index = 2; index < 6; index++){
			rollScore =+ rollScore + randomDieRollArray[index];
		}
	}
	else{
		if(randomDieRollArray[1] === 1){
			rollScore = randomDieRollArray[2];
		}
		else if(randomDieRollArray[1] === 2){
			rollScore = randomDieRollArray[3];
		}
		else if(randomDieRollArray[1] === 3){
			rollScore = randomDieRollArray[4];
		}
		else{
			rollScore = randomDieRollArray[5];
		}
	}
	randomDieRollArray[6] = rollScore;
	return randomDieRollArray;
}

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
	let roundsRequestedByPlayer = getUserInput("How many rounds would you like to play?", validateForPositiveIntegerInput);
	for(let index = 1; index <= roundsRequestedByPlayer; index++){
		displayAlert("Roll Dice\n         |\n         |\n         |\n         |\n         |\n         |\n          ------------------------------------------->");
		player = createCumulativeScores(totalScoreForThisRoll(getRandomDieValues(player)));
		displayAlert("Player rolls:\n----------------------------------------\n\Position Selector Toggle die:    " + player[0] + "\nPosition Selector die:                " + player[1] + "\nPosition #1 die:                         " + player[2] + "\nPosition #2 die:                         " + player[3] + "\nPosition #3 die:                         " + player[4] + "\nPosition #4 die:                         " + player[5] + "\n----------------------------------------\nTotal For This Roll:                     " + player[6]);
		computer = createCumulativeScores(totalScoreForThisRoll(getRandomDieValues(computer)));
		displayAlert("Computer rolls:\n----------------------------------------\n\Position Selector Toggle die:    " + computer[0] + "\nPosition Selector die:                " + computer[1] + "\nPosition #1 die:                         " + computer[2] + "\nPosition #2 die:                         " + computer[3] + "\nPosition #3 die:                         " + computer[4] + "\nPosition #4 die:                         " + computer[5] + "\n----------------------------------------\nTotal For This Roll:                     " + computer[6]);
		displayAlert("Score for Round #" + index + ":\n\n\n      Player: " + player[6] + "          Grand Total: " + player[7] + "\n\nComputer: " + computer[6] + "          Grand Total: " + computer[7]);
	}
	if(player[7] > computer[7]){
		displayAlert("Yippee\n\nPlayer Wins with " + player[7] + " points!!");
	}
	else if(player[7] !== computer[7]){
		displayAlert("Dog gone that computer gets me every time :(\n\nComputer Wins with " + computer[7] + " points!!");
	}
	else{
		displayAlert("It's a draw folks\n\nPlayer and Computer Tie!\n\nCome back soon and play again.");
	}
}

runGame();
