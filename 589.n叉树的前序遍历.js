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
  const result = [];
  recursive(root);
  return result;

  function recursive(node) {
    if (!node) return;
    result.push(node.val);
    node.children.forEach((item) => {
      recursive(item);
    });
  }
};
// @lc code=end
