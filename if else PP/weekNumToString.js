/**
 * Read a Number and Display the week day (Sunday, Monday,...)
 */
let num = Math.floor(Math.random()*7)+1;
console.log(num)
if(num==1){weekStr = "Mondy";}
else if(num==2){weekStr = "Tuesday";}
else if(num==3){weekStr = "Wednesday";}
else if(num==4){weekStr = "Thursday";}
else if(num==5){weekStr = "Friday";}
else if(num==6){weekStr = "Saturday";}
else if(num==7){weekStr = "Sunday";}
else { weekStr = "Incorrect input";}
console.log(weekStr)