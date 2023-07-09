const sumAll = function(num1, num2) {
    // returning error if values are something else than integers
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    
    // checking which value is smaller
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);

    // setting up the counters
    let sum = 0;
    let i = min;

    // iterating through until the max value
    while (i < max+1) {
        sum += i;
        i += 1;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
