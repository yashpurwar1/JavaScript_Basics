/**
 * Write a program that computes a factorial of a number taken as input.
5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
 */
const prompt = require('prompt-sync')();

 const number = prompt('Enter a number: ');
 let fact = 1;
 
 for ( i = 2; i <= number; i++ ) {
     fact = fact * i;
 }
 console.log("Factorial of "+number+ " is " + fact);