/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let stringVal = x.toString();
    for(let i=0; i<stringVal.length/2; i++){
        if(stringVal[i] !== stringVal[stringVal.length-1-i]) return false;
    }
    return true;
};

var isPalindrome = (x) => {
    let copy = x;
    let reverse = 0;
    while(copy > 0){
        const digit = copy % 10;
        reverse = reverse * 10 + digit;
        copy = Math.floor(copy/10);
    }
    return reverse === x;
}
// @lc code=end

