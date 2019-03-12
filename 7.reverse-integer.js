/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.17%)
 * Total Accepted:    623.2K
 * Total Submissions: 2.5M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 * 
 */

function is32BitSignedInteger(x) {
    return x<=Math.pow(2,31)-1 && x>=Math.pow(-2,31)
}

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(!is32BitSignedInteger(x)) return 0
    let str = x.toString();
    let sign = '';
    if(str.charAt(0) === '-') {
        sign = str.charAt(0)
        str = str.substring(1)
    }
    const returnNumber = Number(sign + str.split('').reverse().join(''))
    return is32BitSignedInteger(returnNumber) ? returnNumber : 0
};

console.log(reverse(-123))

