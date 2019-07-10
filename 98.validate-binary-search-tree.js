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
  // TODO:不通过：[10,5,15,null,null,6,20]，不满足右子树的值大于根值
  /* if (!root) return true
  if (!root.left && !root.right) {
    return true
  } else if ((root.left && root.val <= root.left.val) || (root.right && root.val >= root.right.val)) {
    return false
  } else {
    return isValidBST(root.right) && isValidBST(root.left)
  } */

  // 1. 自身特性：左<根<右
  /* if (!root) return true
  // MIN_VALUE：无法通过
  return valid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)

  function valid (node, low, high) {
    if (!node) return true
    if (node.val <= low || node.val >= high) return false
    return valid(node.left, low, node.val) && valid(node.right, node.val, high)
  } */

  // 2.中序遍历
  let list = []
  inOrder(root, list)
  for (let i = 0; i < list.length; i++) {
    if (list[i] >= list[i + 1]) return false
  }

  return true

  function inOrder (node, list) {
    if (!node) return
    inOrder(node.left, list)
    list.push(node.val)
    inOrder(node.right, list)
  }
}
