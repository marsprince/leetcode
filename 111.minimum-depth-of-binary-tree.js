/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null ) return 0
    if(root.left === null) {
        return root.right === null ? 1 : 1+minDepth(root.right)
    } else {
        return root.right === null ? 1 + minDepth(root.left) : 1 + Math.min(minDepth(root.left),minDepth(root.right))
    }
};

