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
var fib = (function () {
  // 2.立即可执行函数，保留计算的值
  let memo = [];
  return function (N) {
    if (memo[N]) return memo[N];
    if (N === 0) return 0;
    if (N === 1) return 1;
    memo[N] = fib(N - 1) + fib(N - 2);
    return memo[N];
  };
})();
// @lc code=end
