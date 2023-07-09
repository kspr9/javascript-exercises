const leapYears = function(year) {
    // return true if year passed is a leap year
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

};

// Do not edit below this line
module.exports = leapYears;
