const repeatString = function(str, number) {
    if (number < 0) {
        return "ERROR";
    }
    // repeat the str number of times
    return str.repeat(number);
};

// Do not edit below this line
module.exports = repeatString;
