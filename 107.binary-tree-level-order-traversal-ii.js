/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root === null) return []
    let result = []
    let stack = [[root]]
    while(stack.length!==0) {
        const nodes = stack.pop()
        let _result = []
        let _stack = []
        nodes.forEach(node=>{
            _result.push(node.val)
            if(node.left) {
                _stack.push(node.left)
            }
            if(node.right) {
                _stack.push(node.right)
            }
        })
        if(_result.length!==0) {
            result.unshift(_result)
        }
        if(_stack.length!==0) {
            stack.push(_stack)
        }
    }
    return result
};

