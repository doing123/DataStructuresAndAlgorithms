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
  // 2.迭代
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let pow = 1;
  while (n) {
    if (n & 1) pow *= x; // n%2 == 1 奇数
    x *= x;
    n >>>= 1;
  }
  return pow;
};
// @lc code=end
