/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(N===0 || N === 1) return N
    let a = 0;
    let b = 1;
    let temp;
    for(let i=2;i<=N;i++) {
        temp = a + b
        a = b
        b = temp
    }
    return temp
};

