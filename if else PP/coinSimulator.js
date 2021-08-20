// Generate a random number and then print head and tails accordingly.
let rand = Math.floor(Math.random()*10)%2;
if (rand == 0){
    console.log("Heads");
}else{
    console.log("Tails");
}