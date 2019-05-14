var allLis = document.querySelectorAll("li");

for(var i = 0; i < allLis.length; i++){
    allLis[i].addEventListener("mouseover", function(){
       this.style.color = "green";
    });

    allLis[i].addEventListener("mouseleave", function(){
        this.style.color = "black";
    })

    allLis[i].addEventListener("click", function(){
        this.classList.toggle("done")
    });
}
