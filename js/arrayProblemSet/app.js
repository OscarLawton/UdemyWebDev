var array1 = [1,2,3,4,5];
var array2 = [1,1,1,1,1];
var array3 = [1,2,1,1,1];
var array4 = [1,1,1,1,2];
//print and array in reverse order
function printReverse(array){
    for(var i = array.length-1; i >= 0; i--){
        console.log(array[i])
    }
    
}

// Check if all elements are the same
function isUniformed(array){
    var firstElement = array[0]
    var uniformed = true
    for(var i = 0; i < array.length; i++){
        if(array[i] != firstElement){
            uniformed = false
        } 
    }

    return uniformed
}


//find the sum of all the numbers in an array
function summArray(array){
    var tot = 0;
    for(var i = 0; i < array.length; i++){
        tot += array[i]
    }
    return tot
}

//Find the largets number in the array
function max(array){
    var tmp = 0
    for(var i = 0; i < array.length; i++){
        if (array[i] > tmp){
            tmp = array[i]
        }
    }
    return tmp
}
//Check the functions 
console.log("Check printReverse function ------------")
printReverse(array1);
printReverse(array2);
console.log("")

console.log("Check isUniformed function --------------------")
console.log(isUniformed(array2));
console.log(isUniformed(array3));
console.log(isUniformed(array4));
console.log("")

console.log("Check the summArray function --------------")
console.log(summArray(array1));
console.log(summArray(array3));

console.log("Check the max function")
console.log(max(array1));
console.log(max(array3));
