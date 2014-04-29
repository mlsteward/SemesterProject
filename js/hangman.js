//global variables
var key = "cat";
var guesses = ["a", "s", "d", "f"];
var wordSoFar = [];
var guessCount;
var GUESS_THRESHOLD = 5;

//submit button event handler
$(document).ready(function(){
	$(".submitButton").on("click", function(){
		checkWord($("#guess").val())
	});
});

function checkWord(guess){
	//validate word
	if(validateGuess(guess)){
		//check if letter has been guessed
		if(alreadyGuessed(guess)){
			//see if guess is right or wrong
			if(check(guess)){
				//correct guess
				//Update Display
				if(checkWin()){
					gameWon();
				}
				//update display
			}else{
				guessCount++;
				//update display
				//check4loss
				if(checkLoss()){
					gameLoss();
				}
				
			}
		}else{
			alert("already guessed");
		}
	}else{
		alert("no");
	}
}

//will validate guess to verify it is a letter, returns boolean
function validateGuess(guess){
	if (guess.match(/^[A-z]+$/)){
		return true;
	}
	alert("Invalid format");
	return false;
}

//checks to see if the guess has been tried, returns boolean
//tested and verified.
function alreadyGuessed(guess){
	for(var i = 0; i < guesses.length ; i++){
		if(guesses[i] === guess)
			return false;
	}
	return true;
}

//check guess to see if right or wrong, returns boolean
function check(guess){
	var matchCount
	for(var i = 0; i < key.length ; i++){
		if(key.lowerCase().substr(i,1) == guess){
			//match found, track location(i) and count?
		}
	}
	
}
	
function checkLoss(){
	if (guessCount == GUESS_THRESHOLD){
		return true;
	}else{
		return false;
	}
}

function gameLoss(){
	//die
}

function checkWin(){
	
}

function gameWon(){
	//do celebration?
}




































