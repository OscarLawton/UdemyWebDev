/*var colors = [
    "rgb(255, 0 ,0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
*/
var numOfsquares = 6;
var colors = generateRandomColors(numOfsquares);
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
   
    setupModeButtons();
    setupSquares();
    reset();
    
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            //this.textContent === "Easy" ? numOfsquares = 3: numOfsquares = 6;
            if(this.textContent === "Easy"){
                numOfsquares = 3;
            } else {
                numOfsquares = 6;
            }
            reset();
    
        });
    }
}

function setupSquares(){
    for(var i = 0; i<colors.length; i++){
        //add initia colors to squares
        squares[i].style.backgroundColor = colors[i];
        
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            console.log(clickedColor)
            console.log(pickedColor)
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                messageDisplay.style.textAlign = "center";
                h1.style.backgroundColor = pickedColor
                changeColors(pickedColor);
                resetButton.textContent = "Play Again?";
                console.log("correct");
            } else {
                messageDisplay.textContent = "Try Again"
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

function reset(){
    colors = generateRandomColors(numOfsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors?"
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue"
}

/*easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numOfsquares = 3;
    colors = generateRandomColors(numOfsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0;i < squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})
hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numOfsquares = 6;
    colors = generateRandomColors(numOfsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0;i < squares.length;i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
    }
})*/

resetButton.addEventListener("click", function(){
    reset();
})
colorDisplay.textContent = pickedColor;


function generateRandomColors(num){
    var array = [];
    for(var i = 0; i < num; i++){
        array.push(randomColor());
    }
    return array;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)

    return "rgb("+red+", "+green+", "+blue+")"
}
function changeColors(color){
     for(var i = 0; i < squares.length; i++){
         squares[i].style.backgroundColor = color;
     }
 }

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    console.log(random)
    return colors[random];
}