/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  let result = [];
  while (n > 0) {
    n--
    result.unshift(n % 26);
    n = Math.floor(n / 26);
  }
  // 65:A  97:a
  return result.reduce((prev, item) => {
    return prev + String.fromCharCode(item + 65);
  }, '');
};
// @lc code=end
