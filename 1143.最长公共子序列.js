/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  // 1.递归：超时
  let m = text1.length;
  let n = text2.length;

  return dp(0, 0);

  // 两个指针 i,j 分别在两个字符串上移动，大概率是动态规划
  function dp (i, j) {
    if (i === m || j === n) return 0;
    if (text1[i] === text2[j]) {
      return 1 + dp(i + 1, j + 1);
    } else {
      // text1[i] 和 text2 至少有一个字符不在 最长公共子序列中
      // 穷举三种情况：text1[i]不在 lcs；text2[j]不在 lcs；都不在 lcs，取最大值
      // 情况三被一和二包含了
      return Math.max(dp(i + 1, j), dp(i, j + 1));
    }
  }
};
// @lc code=end
