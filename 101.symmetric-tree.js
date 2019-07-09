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
var isSymmetric = function (root) {
  if (!root) return true
  function walk (left, right) {
    if (!left && !right) {
      return true
    } else if ((left && !right) || (!left && right) || (left.val !== right.val)) {
      return false
    } else {
      return walk(left.left, right.right) && walk(left.right, right.left)
    }
  }

  return walk(root.left, root.right)
}
