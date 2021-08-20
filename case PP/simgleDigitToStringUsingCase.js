/**
 * Read a single digit number and write the number in word using Case
 */
let num = Math.floor(Math.random()*10);
let word;
switch(num){
    case 0:
        word="Zero";
        break;
    case 1:
        word="One";
        break;
    case 2:
        word="Three";
        break;
    case 3:
        word="Three";
        break;
    case 4:
        word="Four";
        break;
    case 5:
        word="Five";
        break;
    case 6:
        word="Six";
        break;
    case 7:
        word="Seven";
        break;
    case 8:
        word="Eight";
        break;
    case 9:
        word="Nine";
        break;
    default:
        word="incorrect input";
    }
console.log(word);