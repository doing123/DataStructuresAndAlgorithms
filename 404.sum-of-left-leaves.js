/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
var sumOfLeftLeaves = function(root) {
  if(!root || (!root.left && !root.right)) return 0
  let result = 0

  calculate(root.left, true)
  calculate(root.right, false)

  return result

  function calculate(node, bool) {
    if(!node) return
    if(!node.left && !node.right && bool) {
      result+= node.val
    }
    calculate(node.left, true)
    calculate(node.right, false)
  }
};

