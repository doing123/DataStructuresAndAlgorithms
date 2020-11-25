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
  // 3.dp 数组的迭代解法：自底向上，优化：不需要那么长的一个 DP table 来存储所有的状态，只存储两个状态
  if (N === 0) return 0;
  let a = 1;
  let b = 1;
  for (let i = 3; i <= N; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};
// @lc code=end
