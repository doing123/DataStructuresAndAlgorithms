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
// 平衡二叉树：二叉树中任意一个节点的左右子树的高度相差不能大于 1
var isBalanced = function (root) {
  if (root == null) return true
  if (Math.abs(height(root.left) - height(root.right)) > 1) return false
  return isBalanced(root.left) && isBalanced(root.right)
};

function height(node) {
  if (node == null) return 0
  return 1 + Math.max(height(node.left), height(node.right))
}

