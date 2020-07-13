/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let result = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    let num = s[i].charCodeAt() - 64;
    if (len - i > 1) {
      num *= Math.pow(26, len - i - 1);
    }
    result += num;
  }
  return result;
};
// @lc code=end
