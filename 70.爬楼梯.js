/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // 1.动态规划 超时
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};
// @lc code=end
