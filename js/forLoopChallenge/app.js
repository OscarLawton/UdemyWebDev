//print out -10 to 19
console.log("print out all numbers from -10 to 19")
for(var i = -10; i < 19; i++){
    console.log(i)
}

//print all even numbers between 10 and 40
console.log("print out all even numbers from 10 to 40")
for(var i = 10; i< 40; i+=2){
    console.log(i)
}

//print out all odd number between 300 and 333
console.log("Print out all number between 300 and 333");
for(var i = 300; i < 333; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}

//print out all the numbers between divisable by 5 and 3 between 5 and 50
console.log("pint out all the numbers divisble by 5 and 3 between 5 and 50")
for(var i = 5; i <= 50; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(i)
    }
}