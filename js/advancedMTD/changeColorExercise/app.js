var btn = document.querySelector("h1");
var body = document.getElementsByTagName("body")[0];
var colorCheck = false

btn.addEventListener("click",function(){
    if (colorCheck === false){
        body.style.backgroundColor="purple"
        colorCheck = true
    } else {
        body.style.backgroundColor="white"
        btn.style.borderColor = "brown"
        colorCheck = false
    }
    
});