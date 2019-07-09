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
  // 递归
  /* if (!root) return true
  function walk (left, right) {
    if (!left && !right) {
      return true
    } else if ((left && !right) || (!left && right) || (left.val !== right.val)) {
      return false
    } else {
      return walk(left.left, right.right) && walk(left.right, right.left)
    }
  }

  return walk(root.left, root.right) */

  // 迭代：使用两个队列
  if (!root) return true
  let q1 = []
  let q2 = []
  q1.push(root.left)
  q2.push(root.right)
  while (q1.length && q2.length) {
    let node1 = q1.shift()
    let node2 = q2.shift()
    if (!node1 && !node2) continue
    if ((node1 && !node2) || (!node1 && node2) || (node1.val !== node2.val)) return false
    q1.push(node1.left)
    q1.push(node1.right)
    q2.push(node2.right)
    q2.push(node2.left)
  }
  return true
}
