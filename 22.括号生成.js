/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // 1.
  let result = [];
  generate(n, n, '');
  return result;
  // left：当前已用左括号 right：已用右括号, s：当前字符
  function generate (left, right, s) {
    if (left === 0 && right === 0) {
      result.push(s);
      return;
    }
    if (left > 0) generate(left - 1, right, s + '(');
    if (right > left) generate(left, right - 1, s + ')');
  }
};
// @lc code=end
