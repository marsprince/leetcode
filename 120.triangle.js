/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(triangle === null) return 0
    let sum = []
    for(let i=triangle.length-1;i>=0;i--) {
        const currentLine = triangle[i]
        if(sum.length === 0) {
            sum = triangle[i]
        } else {
            for(let j=0;j<currentLine.length;j++) {
                sum[j] = currentLine[j]+Math.min(sum[j],sum[j+1])
            }
        }
    }
    return sum[0]
};
