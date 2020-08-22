/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // 1.递归
  if (n == 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2 == 0) {
    return myPow(x * x, n / 2);
  }
  return myPow(x, n - 1) * x;
};
// @lc code=end
