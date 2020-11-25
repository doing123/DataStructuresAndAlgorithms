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
  // 2.备忘录 自动向下
  if (N === 0) return 0;
  const memory = [];

  return helper(N);

  function helper (N) {
    if (N === 1 || N === 2) return 1;
    if (!memory[N]) {
      memory[N] = helper(N - 1) + helper(N - 2);
    }
    return memory[N];
  }
};
// @lc code=end
