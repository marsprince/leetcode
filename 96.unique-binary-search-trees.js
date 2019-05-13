/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if(n<=1) return 1
    if(!numTrees._cache) numTrees._cache = {}
    if(numTrees._cache[n]) return numTrees._cache[n]
    let result = 0
    for(let i=1;i<=n;i++) {
        result += numTrees(i-1) * numTrees(n-i)
    }
    numTrees._cache[n] = result
    return result
};

