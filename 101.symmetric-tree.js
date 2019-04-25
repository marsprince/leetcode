/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function(root) {
    if(root ===null) return true
    function symmetric(node1,node2) {
        if(node1===null || node2===null) {
            return node1 === node2
        } else {
            return node1.val === node2.val && symmetric(node1.left,node2.right) && symmetric(node1.right,node2.left)
        }
    }
    return symmetric(root.left,root.right)
};

