var h1 = document.querySelector("h1");
var isPink = false
h1.style.color = "pink";

setInterval(function(){
    if(isPink){
        h1.style.color = "lightblue"
    } else {
        h1.style.color = "pink"
    }
    isPink = !isPink
}, 100)