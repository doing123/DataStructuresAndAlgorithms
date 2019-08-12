/*
 * @lc app=leetcode id=99 lang=javascript
 *
 * [99] Recover Binary Search Tree
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  // 复原二叉搜索树
  // 1.递归，中序遍历
  let list = []
  let vals = []
  inOrder(root, list, vals)
  vals.sort((a, b) => a - b)
  for (let i = 0; i < vals.length; i++) {
    list[i].val = vals[i]
  }

  // TODO:
}

function inOrder (root, list, vals) {
  if (!root) return
  inOrder(root.left, list, vals)
  list.push(root)
  vals.push(root.val)
  inOrder(root.right, list, vals)
}
