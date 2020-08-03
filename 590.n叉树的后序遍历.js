/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  let result = [];
  let queue = [root];
  while (queue.length) {
    let node = queue.pop();
    if (node != null) {
      result.unshift(node.val);
      if (node.children) {
        queue.push(...node.children);
      }
    }
  }
  return result;
};
// @lc code=end
