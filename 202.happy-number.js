/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    function cal(s) {
        let num = 0;
        let str = s.toString();
        for(let i=0;i<str.length;i++) {
            num+=Number(str[i]) * Number(str[i])
        }
        return num
    }   
    var seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = cal(n);
    }
    return n === 1 ? true : false;
};