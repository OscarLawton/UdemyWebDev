var scoreDiv = document.getElementById("scoreDisplay")
var btn1 = document.getElementById("player1Btn")
var btn2 = document.getElementById("player2Btn")
var btnReset = document.getElementById("resetBtn")
var limitBtn = document.getElementById("limit-btn")
var playingTo = document.querySelector("h2")
//player one and player two's score variables
var p1Score = 0
var p2Score = 0
var scoreLimit = 10;
var isGameOver = false

    btn1.addEventListener("click", function(){
        if(isGameOver === false){
            if(p1Score === scoreLimit || p2Score === scoreLimit){
                scoreDiv.innerHTML = "<h3>Game Over! Player 1 wins</h3>"  
                isGameOver = true
          
            } else {
                p1Score += 1
                console.log(scoreLimit)
                scoreDiv.innerHTML = "<h3>" + p1Score + " and " + p2Score + "</h3>"  
            }
        }
       
    })
    
    btn2.addEventListener("click", function(){
        if(isGameOver === false){
            if(p1Score === scoreLimit || p2Score === scoreLimit){
                scoreDiv.innerHTML = "<h3>Game Over! Player 2 wins</h3>"  
                isGameOver = true
        
            } else {
                p2Score += 1
            scoreDiv.innerHTML = "<h3>" + p1Score + " and " + p2Score + "</h3>"  
            }
        }
    })



btnReset.addEventListener("click", function(){
    p1Score = 0
    p2Score = 0
    isGameOver = false
    scoreDiv.innerHTML = "<h3>" + p1Score + " and " + p2Score + "</h3>"  
    
})

limitBtn.addEventListener("click", function(){
    var number = document.getElementById("limit").value
    scoreLimit =  parseInt(number, 10);
    console.log(scoreLimit)
    playingTo.textContent = "playing to " + number
})


