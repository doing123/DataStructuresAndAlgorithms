/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // 1.递归 + 备忘录  超出时间限制
  let n = nums.length;
  let memo = new Array(n).fill(n);
  return dp(nums, 0);

  function dp (nums, p) {
    if (p >= n - 1) return 0; // 当 p 跳过最后一格时，不需要跳跃
    if (memo[p] !== n) return memo[p];

    let steps = nums[p];
    for (let i = 1; i <= steps; i++) {
      // 穷举每一个选择，计算每一个子问题的结果
      let subProblem = dp(nums, p + i);
      // 取最小
      memo[p] = Math.min(memo[p], subProblem + 1);
    }

    return memo[p];
  }
};
// @lc code=end
