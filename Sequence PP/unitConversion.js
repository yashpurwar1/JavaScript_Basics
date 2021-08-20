// problem a.
// a. 1ft = 12 in then 42 in = ? ft

let inch = 42;
console.log(inch, "inch in feet are "+ inch/12);

// problem b.
// b. Rectangular Plot of 60 feet x 40 feet in meters
// Let 1feet = .3mt.

let lengthInFt = 60
let widthInFt = 40
lengthInMt = 60*.3;
widthInMt = 40 *.3;
areaOfPlot = lengthInMt*widthInMt;
console.log("Area in mt is "+ areaOfPlot);

// problem c
// c. Calculate area of 25 such plots in acres
// area of 25 plot will be areaOfPlot * 25

areaOf25Plots = areaOfPlot*25;
// area in acre
areaInAcre = areaOf25Plots/4047;
console.log("Area of 25 plots in acre will be " +areaInAcre);