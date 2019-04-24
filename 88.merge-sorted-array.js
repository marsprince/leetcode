/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let point = nums1.length-1
    while(point!==-1) {
        if(n === 0) break;
        if(m===0 || nums1[m-1] < nums2[n-1]) {
            nums1[point] = nums2[n-1];
            n--
        } else {
            nums1[point] = nums1[m-1];
            m--
        }
        point--
    }
};
