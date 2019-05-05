//print out -10 to 19
console.log("print out all numbers from -10 to 19")
let i = -10

while(i < 20){
    console.log(i)
    i++;
}

//print all even numbers between 10 and 40
console.log("print out all even numbers from 10 to 40")
let x = 10
while(x <= 40){
    console.log(x)
    x+=2;
}

//print out all odd number between 300 and 333
console.log("Print out all number between 300 and 333");
let j = 300
while(j < 333){
    if(j % 2 != 0){
        console.log(j);
    }
    j++;
}

//print out all the numbers between divisable by 5 and 3 between 5 and 50
console.log("pint out all the numbers divisble by 5 and 3 between 5 and 50")
let y = 5
while(y < 50){
    if(y % 5 === 0 && y % 3 === 0){
        console.log(y);
    }
    y++;
}