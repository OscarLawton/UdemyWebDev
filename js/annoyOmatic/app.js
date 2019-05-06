/*let weAreThere = false;
let answer = "";
while(weAreThere === false){
    answer = prompt("Are we there yet?")
    if(answer === "yes"){
        weAreThere = true;
    }
}

alert("Alert we made it!")*/

let weAreThere = false;
let answer = "";

while(weAreThere === false){
    answer = prompt("Are we there yet?")
   
    alert(answer.indexOf("yes"))
    if(answer.indexOf("yes") != -1){
        weAreThere = true;
    }
}

alert("Alert we made it!")