/**
 * Read a Number and Display the week day (Sunday, Monday,...)
 */
let num = Math.floor(Math.random()*6)+1;
let week;
switch(num){
    case 1:
        week="Monday";
        break;
    case 2:
        week="Tuesday";
        break;
    case 3:
        week="Wednesday";
        break;
    case 4:
        week="Thursday";
        break;
    case 5:
        week="Friday";
        break;
    case 6:
        week="Saturday";
        break;
    case 7:
        week="Sunday";
        break;
    default:
        week="Invalid input";
        break;
    }
console.log("Week is "+week);