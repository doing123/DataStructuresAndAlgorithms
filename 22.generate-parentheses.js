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

  // left：当前已用左括号 right：已用右括号, s：当前字符
  function generate (left, right, s) {
    //  终止条件：如果左右括弧都用完则结束
    if (s.length === 2 * n) {
      result.push(s);
      return;
    }

    // 如果左括弧未用完则继续增加左括弧
    if (left < n) {
      generate(left + 1, right, s + '(');
    }

    // 如果右括弧少于左括弧则继续增加右括弧
    if (left > right) {
      generate(left, right + 1, s + ')');
    }
  }

  generate(0, 0, '');

  return result;
};
// @lc code=end
