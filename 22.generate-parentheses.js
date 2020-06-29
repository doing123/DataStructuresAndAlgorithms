/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  function generate(left, right, total, s) {
    if (left === total && right === total) {
      result.push(s);
      return;
    }

    if (left < n) {
      generate(left + 1, right, total, s + '(');
    }
    if (left > right) {
      generate(left, right + 1, total, s + ')');
    }
  }

  generate(0, 0, n, '');

  return result;
};
// @lc code=end
