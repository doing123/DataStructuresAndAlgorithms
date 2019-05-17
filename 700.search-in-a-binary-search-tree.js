/*
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(root == null) return root
    if(root.val == val) return root
    if(val >= root.val) {
      return searchBST(root.right, val) || searchBST(root.right, val)
    }
    return searchBST(root.left, val)

};

