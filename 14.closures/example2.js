"use strict";
function createCounter() {
    let counterValue = 0;
    return {
        increament: function () {
            counterValue++;
        },
        getValue: function () {
            return counterValue;
        }
    };
}
const counter1 = createCounter(); //object aah counter1 la kadaikithu //counterValue = 0 nu iruku aprm increment() getvalue()
const counter2 = createCounter();
counter1.increament();
counter2.increament();
console.log(counter1.getValue(), 'COUNTER1');
console.log(counter2.getValue(), 'COUNTER2');
