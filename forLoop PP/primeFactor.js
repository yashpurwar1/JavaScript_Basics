/**
 * Write a program to compute Factors of a number N using prime factorization method.
 */
const prompt = require('prompt-sync')();
const number = prompt('Enter any number to print prime factors: ')

let isPrime = 0;

for ( i = 2; i <= number; i++ ) {
    if ( number % i == 0 ) {
        isPrime = 1;
        for ( j = 2; j <= i / 2; j++ ) {
            if ( i % j == 0) {
                isPrime = 0;
            }
        }
        if ( isPrime == 1 ) {
            console.log(i);
        }
    }
}