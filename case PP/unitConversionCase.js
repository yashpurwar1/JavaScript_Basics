/**
 * Write a program that takes User Inputs and does Unit Conversion of
different Length units
 */

const rl = require("prompt-sync") ();
console.log("Enter your choice:");
console.log("1 for Feet to inch:");
console.log("2 for inch to feet:");
console.log("3 for feet to meter");
console.log("4 for meter to feet");
const choice = prompt("Enter your choice : ");
const length = prompt("Enter length");
let convertedLength=0;

switch(choice){
    case 1:
        convertedLength = length * 12;
        break;
    case 2:
        convertedLength = length / 12;
        break;
    case 3:
        convertedLength = length / 3;
        break;
    case 4:
        convertedLength = length * 3;
        break;
    default:
        console.log("incorrect choice");
}
console.log("Coverted length in desired unit is : ",+convertedLength);
