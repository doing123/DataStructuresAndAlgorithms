/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isNegative = x < 0;
  x = Math.abs(x); // 取绝对值
  let res = 0;
  while (x > 0) {
    res = res * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if (isNegative) {
    res = parseInt('-' + res);
  }
  if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
    res = 0;
  }
  return res;
};
// @lc code=end
