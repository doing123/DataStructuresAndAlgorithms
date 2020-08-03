/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  // 迭代
  let result = [];
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (node) {
      result.push(node.val);
      if (node.children) {
        queue.unshift(...node.children);
      }
    }
  }

  return result;
};
// @lc code=end
