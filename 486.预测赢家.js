/*
 * @lc app=leetcode.cn id=486 lang=javascript
 *
 * [486] 预测赢家
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  // 2.记忆化递归
  const len = nums.length;
  const memo = Array.from(new Array(len), () => new Array(len));

  function helper(i, j) {
    if (memo[i][j]) {
      return memo[i][j];
    }

    if (i === j) {
      memo[i][j] = nums[i];
      return nums[i];
    }
    const pickI = nums[i] - helper(i + 1, j);
    const pickJ = nums[j] - helper(i, j - 1);
    memo[i][j] = Math.max(pickI, pickJ);
    return memo[i][j];
  }

  return helper(0, len - 1) >= 0;
};
// @lc code=end
