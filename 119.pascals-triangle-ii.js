/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = []
    for(let i=0;i<=rowIndex;i++) {
        let line = []
        for(let j=0;j<=i;j++) {
            if(j===0 || j===i) {
                line[j] = 1
            } else {
                line[j] = result[j-1] + result[j]
            }
        }
        result = line
    }
    return result
};

