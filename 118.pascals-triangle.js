/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = []
    for(let i = 0;i<numRows;i++) {
        let line = []
        let pre = result[i-1]
        for(let j=0;j<=i;j++) {
            if(j ===0 || j ===i) {
                line[j] = 1
            } else {
                line[j] = pre[j-1] + pre[j]
            }
        }
        result.push(line)
    }
    return result
};
