/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // 1.转数组吧
  // 前序遍历，再排序求值
  /* let res = []
  recursive(root)
  res.sort((a, b) => a - b)
  return res[k - 1]

  function recursive (node) {
    if (!node) return
    res.push(node.val)
    if (node.left) recursive(node.left)
    if (node.right) recursive(node.right)
  } */

  // 2.看了博客，中序遍历足以
  return kthSmallestDFS(root)
  function kthSmallestDFS (node) {
    if (!node) return -1
    let val = kthSmallestDFS(node.left)
    if (k === 0) return val
    if (--k === 0) return node.val
    return kthSmallestDFS(node.right)
  }
}
