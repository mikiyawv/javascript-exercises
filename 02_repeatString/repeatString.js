const repeatString = function(word, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let combinedWord = '';
        for(let i = 0; i < num; i++) {
            combinedWord += word;
        }
        return combinedWord; 
}

// Do not edit below this line
module.exports = repeatString;
