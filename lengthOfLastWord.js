/**
 * Algorithm practice in JavaScript!
 * "Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
 * return the length of last word (last word means the last appearing word if we loop from left to right) in the string.
 * If the last word does not exist, return 0."
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {  
    if (s.length === 0) {
        return 0;
    } 
    
    var splitStr = s.trim().split(" ");
    return splitStr[splitStr.length - 1].length;
    
};
