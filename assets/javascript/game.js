//Setting up var
var wins = 0;
var losses = 0;
var guesses = 12;
var guessesLeft = 12;
var guessedLetters = [];
var letterToGuess = null;

//Letter for comp
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Computer picks a random letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//function for guesses left
var chgGuessesLeft = function() {
  document.querySelector('#guess-left').innerHTML = "Guesses left: " + guessesLeft;
};

var compLetter = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var chgGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector('#list').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
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


//When key is released it becomes the users guess
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
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Uh-oh! You didn't get this one.  Try again.");
            // Then we'll call the reset. 
            reset();
        }
};
