const findTheOldest = function(arr) {
    return arr.reduce((a, b) => {
        let oldestAge = getAge(a.yearOfBirth, a.yearOfDeath);
        let currentAge = getAge(b.yearOfBirth, b.yearOfDeath);
        return oldestAge > currentAge ? a : b;
    }
)};

const getAge = function(birth, death) {
    if (!death) death = new Date().getFullYear();

    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;