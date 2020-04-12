/**
 * Algorithm practice in JavaScript!
 * "Given a string, sort it in decreasing order based on the frequency of characters."
 */


/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let result = "";
    let letters = {}; 
    let sortedLetters = {};
        
    for (let letter of s) { 
        if (letters[letter] === undefined) {
            letters[letter] = 1;
        }
        else {
            letters[letter]++
        }
    }
    
    sortedLetters = Object.keys(letters);   
    sortedLetters.sort(function(a,b) {return letters[b] - letters[a]});
 
    for (let sortedLetter of sortedLetters) {       
        for (var i = 0; i < letters[sortedLetter]; i++) {      
                result += sortedLetter;               
        }
    }
   
    return result; 
};
