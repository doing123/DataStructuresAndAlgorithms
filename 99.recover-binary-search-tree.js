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
  /* let list = []
  let vals = []
  inOrder(root, list, vals)
  vals.sort((a, b) => a - b)
  for (let i = 0; i < vals.length; i++) {
    list[i].val = vals[i]
  } */

  // 2.递归：利用栈
  // 三个指针，first，second分别表示第一个和第二个错乱位置的节点，pre指向当前节点p的中序遍历的前一个节点
  // BST：左 < 中 < 右，即 pre.val < p.val
  let pre = null
  let first = null
  let second = null
  let p = root
  let stack = []
  while (p || stack.length) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    p = stack.pop()
    if (pre) {
      if (pre.val > p.val) {
        if (!first) first = pre
        second = p
      }
    }
    pre = p
    p = p.right
  }
  let tmp = first.val
  first.val = second.val
  second.val = tmp
}

function inOrder (root, list, vals) {
  if (!root) return
  inOrder(root.left, list, vals)
  list.push(root)
  vals.push(root.val)
  inOrder(root.right, list, vals)
}
