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
  if (N == 0) return 0;
  // 1.普通递归 改进
  function helper(n, v1, v2) {
    if (n == 1 || n == 2) return v2;
    return helper(n - 1, v2, v1 + v2);
  }
  return helper(N, 1, 1);
};
// @lc code=end
