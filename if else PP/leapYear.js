// Program to know weather a year is leap year or not.
let year = 2001;
if (year % 4 == 0){
    if (year%100 == 0){
        if (year%400!=0){
            console.log("Year "+year, " is not a leap year");
        }else{
        console.log("Year "+year, " is a leap year");
        }    
    }else{
        console.log("Year "+year, " is a leap year");
    }
}else{
    console.log("Year "+year, " is not a leap year");
}