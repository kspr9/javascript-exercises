const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
        );
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

/*

a quick breakdown of reduce process:

1. The reduce method starts by taking the first two elements in the array. It applies the function you provide to these two elements. This function should return a value.

2. The returned value is then used as the first argument ("accumulator") for the next call to the function, and the next element in the array is used as the second argument.

3. This process is repeated for each item in the array. Each time, the function is called with the result of the last call (the "accumulator") and the next element in the array.

4. Once all items in the array have been processed, the reduce method returns the final "accumulator" value. This is the result of the last function invocation.

*/

/*

another solution

const findTheOldest = function(array) {
    let oldest = array[0];
    let maxAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

    for(let i = 1; i < array.length; i++){
        const age = getAge(array[i].yearOfBirth, array[i].yearOfDeath);
        if(age > maxAge) {
            oldest = array[i];
            maxAge = age;
        }
    }
    return oldest;
};

*/


// Do not edit below this line
module.exports = findTheOldest;
