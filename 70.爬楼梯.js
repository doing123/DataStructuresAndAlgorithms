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
  // 1.动态规划 + 缓存
  if (n <= 2) return n;
  let memory = new Array(n);
  memory[0] = 1;
  memory[1] = 2;
  for (let i = 2; i < n; i++) {
    memory[i] = memory[i - 1] + memory[i - 2];
  }
  return memory[n - 1];
};
// @lc code=end
