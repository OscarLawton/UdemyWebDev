var p = document.querySelector("p")
var btn = document.querySelector("button")
var check = false
btn.addEventListener("click", function(){
    if (check === false){
        p.innerHTML = "<h1><strong>The text changed</strong><h1>"
        check = true
    } else {
        p.textContent = "This text will change"
        check = false
    }
    
});