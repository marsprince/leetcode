/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (33.22%)
 * Total Accepted:    192K
 * Total Submissions: 576.1K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 * 
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 * 
 * Now consider if some obstacles are added to the grids. How many unique paths
 * would there be?
 * 
 * 
 * 
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 * 
 * Note: m and n will be at most 100.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 * 
 * 
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // DP[m,n] = DP[m-1,n] + DP[m,n-1]
    // DP[1,1] = 0, DP[1,0]=1, DP[0,1]=1
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(obstacleGrid[i][j] === 1) {
                obstacleGrid[i][j] = 0;
            } else if(j===0 && i===0) {
                obstacleGrid[i][j] = 1;
            } else if (j === 0) {
                obstacleGrid[i][j] = obstacleGrid[i-1][j]
            } else if (i===0){
                obstacleGrid[i][j] = obstacleGrid[i][j-1]
            } else {
                obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1];
            }
        }
    }
    return obstacleGrid[m-1][n-1]
};

