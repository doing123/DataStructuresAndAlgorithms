/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  let len = postorder.length;
  if (len == 0) return null;
  let index = len - 1; // inorder 的索引，从后往前遍历
  let stack = [];
  let root = new TreeNode(postorder[index]);
  stack.push(root);

  // 从后往前遍历 postorder
  for (let i = len - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];
    if (top.val != inorder[index]) {
      let node = new TreeNode(postorder[i]);
      top.right = node;
      stack.push(node);
    } else {
      let node = null; // 保留上一次出栈的 节点
      while (stack.length && top.val == inorder[index]) {
        node = stack.pop();
        top = stack[stack.length - 1]; // 更新栈顶指针
        index--;
      }
      node.left = new TreeNode(postorder[i]);
      stack.push(node.left);
    }
  }

  return root;
};
// @lc code=end
