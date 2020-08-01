/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
  // 动态规划
  let result = 0;
  let aLen = A.length;
  let bLen = B.length;
  let dp = Array.from(new Array(aLen + 1), () => {
    return new Array(bLen + 1).fill(0); // A、B任意长度为0，即没有公共部分，dp[i][j] = 0
  });

  for (let i = 1; i <= aLen; i++) {
    for (let j = 1; j <= bLen; j++) {
      if (A[i - 1] === B[j - 1]) {
        // 当出现相同元素时，公共前缀等于前缀数组的【末尾项】的公共前缀 + 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      result = Math.max(result, dp[i][j]);
    }
  }

  return result;
};
// @lc code=end
