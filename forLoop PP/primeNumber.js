/**
 * Write a program that takes a input and determines if the number is a prime.
 */
const prompt = require("prompt-sync")();

const number = prompt("Enter a number to check whether it is prime or not: ")
let isPrime = true

if(number == 1){
    console.log("1 is neither prime nor a composite number ")
}

for(i=2; i<=number/2; i++){
    if(number %i == 0){
        isPrime = false
    }
}
if(isPrime){
    console.log("It is a prime number")
}
else{
    console.log("It is not a prime number")
}