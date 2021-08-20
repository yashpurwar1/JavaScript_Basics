/**
 * Write a program that takes a command-line argument n and prints the nth harmonic number.
 */
const prompt = require('prompt-sync')();

 const number = prompt('Enter the value of n: ');
 let sum = 0;

 for(i=1; i <= number; i++){
     sum += 1/i;
 }
 console.log("Harmonic value is: " + sum)