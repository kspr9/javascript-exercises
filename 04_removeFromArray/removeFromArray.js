const removeFromArray = function(array, ...elements) {
    // remove n number of elements from array
    elements.forEach(element => {
        const index = array.indexOf(element);
        // if element is found in the array, remove the element
        if (index !== -1) {
            array.splice(index, 1);
        }
    })
    return array;

    // short way of doing the above
    // function removeFromArray(array, ...values) {
    //      return array.filter(item => !values.includes(item));
    //}

};

// Do not edit below this line
module.exports = removeFromArray;
