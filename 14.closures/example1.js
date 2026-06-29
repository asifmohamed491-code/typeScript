"use strict";
// without closure
let counterValue = 0; //global variable
function increamentCounter() {
    counterValue++;
}
function getCounterValue() {
    return counterValue;
}
increamentCounter();
console.log(getCounterValue()); //1 
increamentCounter(); //2
console.log(getCounterValue());
