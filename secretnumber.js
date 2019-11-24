//create secretNumber
var secretNumber = 4;

//ask user for guess. (Variable prompt gives a string, so variable needs to be transformed in NUMBER!)
//transform guess in number. 
var stringGuess = prompt("Guess a number!");
var guess = Number(stringGuess);

//check if guess is right
if(guess === secretNumber){
    alert("That's right!");
}

// //if guess is wrong
// else{
//     alert("Wrong");
// }

//check if too low
else if(guess < secretNumber){
    alert("higher!");
}

//check if too high
// if(guess) > secretNumber){
else{
    alert("lower!");
}