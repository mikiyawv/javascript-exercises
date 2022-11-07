const palindromes = function(word) {
    let processedWord = word.toLowerCase().replace(/[^a-z]/g, '');
    let reverseWord = processedWord.split('').reverse().join('');
    return processedWord === reverseWord;
};


// Do not edit below this line
module.exports = palindromes;
