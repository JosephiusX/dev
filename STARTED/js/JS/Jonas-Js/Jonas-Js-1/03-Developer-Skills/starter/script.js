// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// s5 l59.Using StackOverflow /////////////////////////////////////////////////////////////////////////////
// s5 l59.Using StackOverflow /////////////////////////////////////////////////////////////////////////////
// s5 l59.Using StackOverflow /////////////////////////////////////////////////////////////////////////////
/*
const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problem
// - what is temp amplitude? Answer: diffrence between highest and lowest temp
// - how to compute max and min temprature
// - what's a sensor error? And what to do

// 2) Breaking up into sub-problems
// - how to ignore errors?
// - find max value in temp array
// - find min value in temp array
// - Subtract min grom max (amplitude) and return it

const calcTempAmplitude = function(temps) {
    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue; // if the curTemp is not a number continue on to the next

        if(curTemp > max) max = curTemp; // if the temp for the iteration is greater than max assign that value to max
        if(curTemp < min) min = curTemp; // if the temp for the iteratoion is smaller than min assign the variable min the value of temp[i]
    }

    console.log(max, min);
    return max -min;
};
// calcTempAmplitude([3, 7, 4,]);
// max = 3 // first iteration checks if 3 is larger than 3, its not so the largest number is saved as the max value
// max = 7 // second iteration checks if 7 is greater than 3 and it is so seven is saved as the max value
// calcTempAmplitude([3, 7, 4,1,8]);

const amplitude = calcTempAmplitude(tempratures);
console.log(amplitude);

// PROBLEM 2:
// Function should now recieve 2 arrays of temps

//  1) Understanding the problem
// - With 2 arrays, should we implement functionality twice?

//  2) Breaking up into sub-problems
//  - merge 2 arrays?

const calcTempAmplitudeNew = function(t1, t2) {
    const temps = t1.concat(t2)
    console.log(temps);

    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue; 

        if(curTemp > max) max = curTemp; 
        if(curTemp < min) min = curTemp; 
    }

    console.log(max, min);
    return max -min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1],[9, 0, 5]);
console.log(amplitudeNew);
*/ 

// l61 Debugging with the console and breakpoints ///////////////////////////////////////////////////////
// l61 Debugging with the console and breakpoints ///////////////////////////////////////////////////////
// l61 Debugging with the console and breakpoints ///////////////////////////////////////////////////////
/*
*/

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: prompt('Degrees celsius')
    };

    console.log(measurement);
    console.table(measurement);

    // console.warn(measureKelvin());
    // console.error(measureKelvin());

    const kelven = measurement.value + 273;
    return kelvin;
}
// identify
console.log(measureKelvin());

