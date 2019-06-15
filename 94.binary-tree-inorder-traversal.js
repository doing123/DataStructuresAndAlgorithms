/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 1. 递归
  // let result = []
  // inOrder(root)
  // return result

  // function inOrder (node) {
  //   if (node) {
  //     inOrder(node.left)
  //     result.push(node.val)
  //     inOrder(node.right)
  //   }
  // }

  // 2. 栈 stack
  const res = []
  const stack = []
  let p = root
  while (p || stack.length) {
    while (p) {
      stack.push(p)
      p = p.left
    }

    p = stack.pop()
    res.push(p.val)
    p = p.right
  }

  return res
}
