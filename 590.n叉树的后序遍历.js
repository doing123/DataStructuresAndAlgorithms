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
  recursive(root);
  return result;

  function recursive(node) {
    if (!node) return;
    node.children.forEach((item) => {
      recursive(item);
    });
    result.push(node.val);
  }
};
// @lc code=end
