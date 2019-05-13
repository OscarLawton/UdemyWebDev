var scoreDiv = document.getElementById("scoreDisplay")
var btn1 = document.getElementById("player1Btn")
var btn2 = document.getElementById("player2Btn")
var btnReset = document.getElementById("resetBtn")
var limitBtn = document.getElementById("limit-btn")
var playingTo = document.querySelector("h2")
var displayWinner = document.getElementById("displayWinner")
var limit = document.getElementById("limit")
//player one and player two's score variables
var p1Score = 0
var p2Score = 0
var scoreLimit = 10;
var isGameOver = false

limit.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("limit-btn").click();
    }
})

    btn1.addEventListener("click", function(){
        if(isGameOver === false){
            
            p1Score += 1
            if(p1Score === scoreLimit || p2Score === scoreLimit){
                displayWinner.innerHTML = "<h3>Game Over! Player 1 wins</h3>"  
                isGameOver = true
              
            }
            console.log(scoreLimit)
            upDateDisplay(p1Score,p2Score)
        }
    })
    
    btn2.addEventListener("click", function(){
        if(isGameOver === false){

            p2Score += 1
            if(p1Score === scoreLimit || p2Score === scoreLimit){
                displayWinner.innerHTML = "<h3>Game Over! Player 2 wins</h3>"
                
                isGameOver = true
            }
            upDateDisplay(p1Score,p2Score)
        }
    })



btnReset.addEventListener("click", function(){
    p1Score = 0
    p2Score = 0
    scoreLimit = 10;
    isGameOver = false;
    upDateDisplay(p1Score,p2Score);
    playingTo.textContent = "playing to " + scoreLimit
    displayWinner.innerHTML = ""
    limit.value = ""
    
})

limitBtn.addEventListener("click", function(){
    number = limit.value
    scoreLimit =  parseInt(number, 10);
    console.log(scoreLimit)
    playingTo.textContent = "playing to " + number
})



function upDateDisplay(player1Score, player2Score){
    scoreDiv.innerHTML = "<h3>" + player1Score + " and " + player2Score + "</h3>"  
}