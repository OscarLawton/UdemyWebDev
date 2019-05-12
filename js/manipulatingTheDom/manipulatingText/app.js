var p = document.getElementsByTagName("p")[0]
var ul = document.querySelector("ul")


function changeText(){
    p.textContent = "List of top game genres"
    ul.innerHTML = "<li>Stealth</li><li>Shoot 'em up</li><li>Beat 'em up</li>"
}
