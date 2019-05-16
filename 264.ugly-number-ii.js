/*
 * @lc app=leetcode id=264 lang=javascript
 *
 * [264] Ugly Number II
 */
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if(n<=1) return n
    let p2Count = 0;
    let p3Count = 0;
    let p5Count = 0;
    let cache = [1]
    for(let i=1;i<n;i++){
        newP2 = 2 * cache[p2Count]
        newP3 = 3 * cache[p3Count]
        newP5 = 5 * cache[p5Count]
        let num = Math.min(newP2,newP3,newP5)
        cache[i] = num
        if(num === newP2) p2Count++
        if(num === newP3) p3Count++
        if(num === newP5) p5Count++
    }
    return cache[n-1]
};
