/**
 * Write a program that reads 5 Random 2 Digit values ,
then find their sum and the average
 */
let sum = 0;
let average = 0;
let len = 5;
// loop for generating and adding the generated number to the sum
for (let i = 0; i<=len-1; i++){
    sum = sum + Math.floor(Math.random()*100);
}
// To find the average by dividing it by the length.
average=sum/len;
console.log("Sum = " +sum, " and average = " +average);
