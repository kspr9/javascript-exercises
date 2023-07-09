const fibonacci = function(n) {
    
    // checks if n is a number, if not, converts it to a int
    if (!Number.isInteger(n)) {
        n = +n;
    }

    // return OOPS if n is lower than 0
    if (n < 0) {
        return "OOPS";
    }

    // returns the n-th fibonacci number
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 1;
    } else {
        let fib = [1, 1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib[n - 1];
    }


};

// Do not edit below this line
module.exports = fibonacci;
