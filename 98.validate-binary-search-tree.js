/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
var isValidBST = function (root) {
  /* if (!root) return true
  if (!root.left && !root.right) {
    return true
  } else if ((root.left && root.val <= root.left.val) || (root.right && root.val >= root.right.val)) {
    return false
  } else {
    return isValidBST(root.right) && isValidBST(root.left)
  } */

  // 1. 自身特性：左<根<右
  if (!root) return true
  // MIN_VALUE：无法通过
  return valid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)

  function valid (node, low, high) {
    if (!node) return true
    if (node.val <= low || node.val >= high) return false
    return valid(node.left, low, node.val) && valid(node.right, node.val, high)
  }
}
