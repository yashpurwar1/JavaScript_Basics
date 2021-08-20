/**
 * Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value
 */
let noOfValues = 5;
rand = Math.floor(Math.random()*1000);
let minimum = rand;
let maximum = rand;
for (let i = 1; i <= noOfValues-1; i++){
    rand = Math.floor(Math.random()*1000);
    if (rand >= maximum){
        maximum=rand;
    }
    if ( rand < minimum){
        minimum=rand;
    }
}
console.log("Minimum and Maximum are "+minimum, " "+maximum);