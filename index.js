"use strict";

function displayResult(dataToBeDisplayed) {
	console.log(dataToBeDisplayed);
}

function totalScoreForThisRoll(randomDieRollArray){
	let rollScore = 0;
	if (randomDieRollArray[0] === 0) {
		for(let index = 2; index < randomDieRollArray.length; index++){
			rollScore =+ rollScore + randomDieRollArray[index];
		}
	}
	else {
		if (randomDieRollArray[1] === 1) {
			rollScore = randomDieRollArray[2];
		}
		else if (randomDieRollArray[1] === 2) {
			rollScore = randomDieRollArray[3];
		}
		else if (randomDieRollArray[1] === 3) {
			rollScore = randomDieRollArray[4];
		}
		else {
			rollScore = randomDieRollArray[5];
		}
	}
	return rollScore;
}

// displayResult("Hello World");

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

displayResult(totalScoreForThisRoll(getRandomDieValues()));


	