/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 1.利用栈和映射
  let stack = [];
  let map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (let c of s) {
    if (!(c in map)) {
      stack.push(c);
    } else if (map[c] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};
// @lc code=end
