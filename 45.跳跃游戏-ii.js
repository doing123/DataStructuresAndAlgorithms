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
  // 2.贪心
  let n = nums.length;
  let end = 0;
  let farthest = 0;
  let jumps = 0;
  // 从索引 0 开始第一步
  for (let i = 0; i < n - 1; i++) {
    // 求出最有大的跳远距离，即局部最优
    farthest = Math.max(farthest, i + nums[i]);
    if (end === i) {
      jumps++;
      end = farthest;
    }
  }

  return jumps;
};
// @lc code=end
