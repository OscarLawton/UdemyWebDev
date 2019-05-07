//Check if a number is even 
function isEven(x){
    if (x % 2 === 0){
        return true
    } else {
        return false
    }
}
console.log(isEven(4));

//Give the factorial of a given number
function factorial(x){
    if (x > 0){
        for(i = x; i > 1; i--){
            x *= (i-1);
        }
        return x
    } else if (x === 0 ){
        return 1;
    } else {
        return "you can only find the factorial of positive numbers"
    }
}
console.log(factorial(2))

//Kabab-case to snake_case
function KababToSnake(x){
    var string = x.split("");

    for(i = 0;i < string.length; i++){
        if(string[i] === "-"){
            string[i] = "_"
        }
    }
    return string.join("")
}
console.log(KababToSnake("i-don't-know-what-to-write"))