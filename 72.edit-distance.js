/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // dp[i][j]表示word1的前i个字符转化为word2的前j个字符需要的操作次数。
    // 如果最后一个字符相等，dp[i][j] = dp[i-1][j-1]
    // 如果最后一个字符串不相等
    // dp[i][j] = min(dp[i][j-1]+1, dp[i-1][j]+1, dp[i-1][j-1]+1)
    let dp = []
    for(let i=0;i<=word1.length;i++) {
        dp[i] = []
        for(let j=0;j<=word2.length;j++) {
            if(i === 0) {
                dp[i][j] = j
            } else if(j===0) {
                dp[i][j] = i
            } else if(word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1]) + 1
            }
        }
    }
    return dp[word1.length][word2.length]
};

