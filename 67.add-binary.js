/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (38.05%)
 * Total Accepted:    292.7K
 * Total Submissions: 757K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let _a = a;
    let _b = b;
    if(_a.length>_b.length) {
        _b = '0'.repeat(_a.length-_b.length) + _b
    } else {
        _a = '0'.repeat(_b.length-_a.length) + _a
    }
    let i = _a.length-1
    let carry = 0;
    let str = ''
    while(i>=0) {
        let result = Number(_a[i]) + Number(_b[i]) + carry
        if(result===2) {
            result = 0;
            carry = 1
        } else if(result===3) {
            result = 1;
            carry = 1
        } else {
            carry=0
        }
        str=result+str
        i--
    }
    if(carry===1) {
        str=carry+str
    }
    return str
};
