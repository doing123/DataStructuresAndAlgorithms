/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 普通二叉树，不是二叉搜索树
  if (root === null) return null
  if (root === p) return p
  if (root === q) return q

  let left = lowestCommonAncestor(root.left, p, q)
  if (left && left !== p && left !== q) return left

  let right = lowestCommonAncestor(root.right, p, q)

  if (left !== null && right !== null) return root
  return left !== null ? left : right
}
