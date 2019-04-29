/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root === null) return true
    function height(_root) {
        if(_root === null) return 0
        return 1 + Math.max(height(_root.left),height(_root.right))
    }
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(height(root.left)-height(root.right)) <=1
};

