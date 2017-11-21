// Creates an array that lists out all of the letter options (alphobet basically).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"
];

//array to store all the users guesses.
var userGuessesSoFar = [];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.

var wins = 0;
var losses = 0;
var guesses = 9;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //keep track of user guesses so far.
    userGuessesSoFar.push(userGuess);
    //   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //debugger;
    // compare your guess to the computers chouce
    // if guess is correct then you win, add to win column and restart game.

    if (userGuess === computerGuess) {
        wins++;
        console.log("a win!");
        alert("You win!");
        // after a win reset counters.....
        guesses = 9;
        userGuessesSoFar.length = 0;
        // if guess is incorrect, decrement the guesses counter and show what your guess was
    } else if (guesses === 0) {
        console.log("you lost!");
        alert("You lost");
        losses++;
        // after a loss reset counters.....
        guesses = 9;
        userGuessesSoFar.length = 0;

    } else if (userGuess !== computerGuess) {
        guesses--;
    }

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    var html =
        "<h1>The Psychic Game</h1>" +
        //           "<p>You chose: " + userGuess + "</p>" +
        "<p>You chose: " + userGuessesSoFar + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>guesses: " + guesses + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html

};