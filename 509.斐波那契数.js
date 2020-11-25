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
  // 3.dp 数组的迭代解法：自底向上
  if (N === 0) return 0;
  const dp = new Array(N + 1).fill(0);
  dp[1] = dp[2] = 1;
  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[N];
};
// @lc code=end
