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
  // 2.使用 replace
  let len;
  do {
    len = s.length;
    s = s.replace('()', '').replace('[]', '').replace('{}', '');
  } while (len !== s.length);
  return s.length === 0;
};
// @lc code=end
