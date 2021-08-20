/**
 * Enter 3 Numbers do following arithmetic operation and find the one that
is maximum and minimum
 */
let a = Math.floor(Math.random()*10);
let b = Math.floor(Math.random()*10);
let c = Math.floor(Math.random()*10);
eq1 = a+b*c;
eq2 = c+a/b;
eq3 = a%b+c;
eq4 = a*b+c;
let max,min;
if (eq1 >= eq2 && eq1 >= eq3 && eq1 >= eq4){
    max = eq1;
}else if (eq2 >= eq1 && eq2 >= eq3 && eq2 >= eq4){
    max = eq2;
}else if (eq3 >= eq1 && eq3 >= eq2 && eq3 >= eq4){
    max = eq3;
}else{
    max = eq4;
}
if(eq1 <= eq2 && eq1 <= eq3 && eq1 <= eq4 ){
    min = eq1;
}else if(eq2 <= eq1 && eq2 <= eq3 && eq2 <= eq4 ){
    min = eq2;
}else if(eq3 <= eq1 && eq3 <= eq2 && eq3 <= eq4 ){
    min = eq3;
}else{
    min = eq4;
}

console.log("Minimum and maximum are " +min , " ",+max);