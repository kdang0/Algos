/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return climbStairs_recursive(0, n);
};

const climbStairs_recursive = (start, dest, memo = {}) => {
    if(start > dest) return 0; //if starting step is greater than the destination, return 0 bc not a valid way
    if(start === dest) return 1;   // if starting step is equal to destination return 1 bc dest can also be 1 or 2
    if(start in memo) return memo[start]; // if starting step is in the hashmap and is greater than 0 return it
    memo[start] = climbStairs_recursive(start + 1, dest, memo) + climbStairs_recursive(start + 2, dest, memo);
    //can take either +1 or +2 steps... assign key (current step position) to value (steps necessary to meet dest)
    //recording the results for each step taken
    return memo[start]; 
}
// @lc code=end

