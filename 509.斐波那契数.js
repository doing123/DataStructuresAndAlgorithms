/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  // 1.普通递归
  if (N == 0) return 0;
  if (N == 1 || N == 2) return 1;
  return fib(N - 1) + fib(N - 2);
};
// @lc code=end
