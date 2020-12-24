/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  // 1.排序 + 最长递增子序列
  // 先对宽度升序排列，宽相同时，按照高度降序排列
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  });

  // 求 高度 的最长递增子序列
  let height = envelopes.map((item) => item[1]);
  return lengthOfLIS(height);

  function lengthOfLIS (nums) {
    let len = nums.length;
    if (len <= 1) return len;
    let dp = new Array(len).fill(1);
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }

    return Math.max(...dp);
  }
};
// @lc code=end
