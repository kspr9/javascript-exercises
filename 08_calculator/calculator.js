const add = function(num1, num2) {
    // return the sum of numbers
    return num1 + num2;
	
};

const subtract = function(num1, num2) {
	// return the difference of numbers
    return num1 - num2;
};

const sum = function(array) {
	// sums the vals elements
    let sum = 0;
    array.forEach((val) => {
        // console.log(val);
        sum += val;
    })
    return sum;
};

const multiply = function(...vals) {
    // multiplies the vals elements
    return vals.reduce((total, current) => total * current, 1);

};

const power = function(num1, num2) {
    // raises one number to the power of another number
    return num1 ** num2;
	
};

const factorial = function(num) {
    // computes the factorial of num
    return num === 0 ? 1 : num * factorial(num - 1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
