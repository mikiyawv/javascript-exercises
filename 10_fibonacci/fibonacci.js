const fibonacci = function(count) {
    let a = 0;
    let b = 1;
    let sum;
    
    let num = parseInt(count);

    if (num === 1) return 1;
    if (num < 1) return 'OOPS';

    for (let i = 1; i < num; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;
};


// Do not edit below this line
module.exports = fibonacci;