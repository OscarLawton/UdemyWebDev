var btn = document.querySelector("h1");
var body = document.getElementsByTagName("body")[0];
var colorCheck = false
//My Soloution
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

//udemy's soloution
/*
btn.addEventListener("click", function(){
    document.body.classList.toggle("purple")
})*/
