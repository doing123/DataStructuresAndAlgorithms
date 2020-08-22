/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  // 1.迭代
  let result = 0;
  let stack = [root];
  while (stack.length) {
    let top = stack.pop();
    if (!top) break;
    result++;
    if (top.left) stack.push(top.left);
    if (top.right) stack.push(top.right);
  }
  return result;
};
// @lc code=end
