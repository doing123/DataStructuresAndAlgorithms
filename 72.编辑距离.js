/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // 1.dp
  let m = word1.length;
  let n = word2.length;
  let dp = Array.from({ length: m + 1 }, () => {
    return new Array(n + 1).fill(0);
  });

  // base case dp[i][j]：s1[0..i] 和 s2[0..j] 的最小编辑距离
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i; // j 为 0， 即只有一种操作：逐个删除
  }

  for (let i = 0; i <= n; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // dp[i][j] word1前i个字符、word2前j个字符相等时最小步数
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
};
// @lc code=end
