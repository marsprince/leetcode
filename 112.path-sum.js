/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(root === null) return false
    if(root.val === sum && root.left ===null && root.right ===null) return true
    let remain = sum - root.val
    return hasPathSum(root.left,remain) || hasPathSum(root.right,remain)
};

