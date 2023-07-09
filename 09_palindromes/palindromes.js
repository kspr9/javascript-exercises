const palindromes = function (str) {
    // checks if the string is a palindrome

    // Remove special characters, convert to lower case and remove spaces
    let cleaned = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    //console.log(cleaned);

    // Reverse cleaned string
    let reversed = cleaned.split('').reverse().join('');

    // Check if cleaned string is equal to reversed string
    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
