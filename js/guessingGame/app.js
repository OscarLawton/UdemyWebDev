

var randNum = Math.floor((Math.random() * 10) + 1);





var guessedCorrect = false;

while(guessedCorrect === false){
    var guess = parseInt(prompt("Guess a number between 1 and 10"), 10);
    
    if (guess === randNum){
        alert("right, the number was " + randNum);
        guessedCorrect = true;

    } else{
        if(guess < randNum){
            alert("your guess was too low");
        } else if (guess > randNum){
            alert("your guess was too high");
        }
    }
}
    
