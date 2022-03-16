// A method to reverse numbers stored in an array

let numbers = [1, 2, 3, 4, 5]

let numericals = [];

for (i = numbers.length - 1; i >= 0; i--){
    numericals = numericals + numbers[i];
    numbers.push(numericals);
}

console.log (numericals);

// A function to reverse numbers stored in an array

function numbersReverse(reverse){
    let numericals = [];

    for (i = reverse.length - 1; i >= 0; i --){
        numericals = numericals + reverse[i];
    }
    return numericals;
}

console.log(numbersReverse([1,2,3,4,5,6]));

//A function to reverse a string

function stringReverse(string){
    let theString = '';

    for (i = string.length - 1; i >= 0; i--){
        theString = theString + string[i];
    }
    return theString;
}

console.log(stringReverse('John Doe'));