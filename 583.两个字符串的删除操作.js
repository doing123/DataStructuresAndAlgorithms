/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // 最后两个字符串被删除后的结果就是 它们两个的最长公共子序列：1143
  let m = word1.length;
  let n = word2.length;

  // 求最长公共子序列的长度
  let lcs = longestCommonSubsequence(word1, word2);
  return m - lcs + n - lcs;
};

var longestCommonSubsequence = function (text1, text2) {
  // 3.动态规划
  let m = text1.length;
  let n = text2.length;
  let dp = Array.from({ length: m + 1 }, () => {
    return new Array(n + 1).fill(0);
  });

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 字符下标从 0 开始
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
};
// @lc code=end
