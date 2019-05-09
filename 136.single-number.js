/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // n ^ n = 0
    // 0 ^ n = n
    return nums.reduce((a, v) => a ^= v);
};

