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
var fib = memorizer(function (N) {
  // 3.改进递归
  if (N == 0) return 0;
  if (N == 1 || N == 2) return 1;
  return fib(N - 1) + fib(N - 2);
});

function memorizer(fn) {
  let memo = [];
  return function (n) {
    if (!memo[n]) memo[n] = fn(n);
    return memo[n];
  };
}
// @lc code=end
