var colors = [
    "rgb(255, 0 ,0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255",
    "rgb(255, 0, 255)",
]
var squares = document.querySelectorAll(".square")
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i<colors.length; i++){
    //add initia colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
     
        if(clickedColor === pickedColor){
           console.log("correct");
        } else {
            console.log('Wrong, wrong wrong')
        }
    });
}

 