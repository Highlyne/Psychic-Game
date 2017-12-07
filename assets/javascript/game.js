//Setting up var
var wins = 0;
var losses = 0;
var guesses = 12;
var guessesLeft = 12;
var guessedLetters = [];
var letterToGuess = null;

//Letter for comp
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Computer picking a random letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//function for guesses left
var chgGuessesLeft = function() {
  document.querySelector('#guess-left').innerHTML = "Guesses left: " + guessesLeft;
};

//Making the letter the user needs to guess
var compLetter = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

//Function to show user guess
var chgGuessesSoFar = function() { 
  document.querySelector('#list').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// to reset
var reset = function() {
  totalGuesses = 12;
  guessesLeft = 12;
  guessedLetters = [];

  compLetter();
  chgGuessesLeft();
  chgGuessesSoFar();
}

compLetter();
chgGuessesLeft();


//To get user's guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  chgGuessesLeft();
  chgGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("You got it right.  Amazing!");
                reset();
            }
        }else if(guessesLeft == 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Uh-oh! You didn't get this one.  Try again.");
            reset();
        }
};
