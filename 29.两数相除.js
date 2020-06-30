/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  // TODO
  if (dividend == 0) return 0;
  if (divisor == 1) return dividend;

  let sign = 1;
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
    sign = -1;
  }

  var a = Math.abs(dividend);
  var b = Math.abs(divisor);
  var res = getResult(a, b);
  if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) {
    return Math.pow(2, 31) - 1;
  }
  return sign * res;

  function getResult(a, b) {
    if (a < b) return 0;
    let count = 1;
    let tb = b;
    while (tb * 2 <= a) {
      count *= 2;
      tb *= 2;
    }

    return count + getResult(a - tb, b);
  }
};
// @lc code=end
