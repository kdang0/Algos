/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sumString = "";
    const largerLength = a.length < b.length ? b.length-1 : a.length-1;
    const iterations = a.length < b.length ? a.length : b.length;
    let carryOver = 0;
    for(let i=0; i<iterations; i++){
        if(a[largerLength-i] == 1 && b[iterations-1] == 1 && carryOver == 1){
            carryOver = 0;
            sumString += "1"
        }
        else if(a[largerLength-i] == 1 && b[iterations-1] == 1){
            carryOver = 1;
            sumString += "0"
        } else if((a[largerLength-i] == 0 || b[iterations-1] ==0) && carryOver == 1){
            carryOver = 0;
            sumString +="1";
        } else{
            let sum = parseInt(a[largerLength-i]) + parseInt(b[iterations-1])
            sumString += sum;
        }
    }
    if(carryOver === 1){
        sumString += "10";
    }
    return sumString;
};
// @lc code=end

