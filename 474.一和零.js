/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  // 2.动态规划
  // dp[i][j]：表示有 i 个0和 j 个1时能组成的最多字符串个数
  let dp = Array.from({ length: m + 1 }, () => {
    return new Array(n + 1).fill(0);
  });

  for (let k = 0, len = strs.length; k < len; k++) {
    let zeroes = 0;
    let ones = 0;
    for (let c of strs[k]) {
      if (c === '0') {
        zeroes++;
      } else {
        ones++;
      }
    }

    for (let i = m; i >= zeroes; i--) {
      for (let j = n; j >= ones; j--) {
        // 使用 strs 当前项，计数加 1，取最大值
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroes][j - ones] + 1);
      }
    }
  }

  return dp[m][n];
};
// @lc code=end
