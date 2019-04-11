/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (42.87%)
 * Total Accepted:    497.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // DP[i] = max{DP[i-1] + A[i],A[i]}
    // DP[0] = 0
    // DP[1] = max{DP[0]+A[1],A[1]}
    let dp = nums[0];
    let max = dp;
    for(let i=1;i<nums.length;i++) {
        const val = nums[i];
        dp = dp + val > val ? dp+val : val
        if(dp>max) max = dp
    }
    return max
};
