/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 1.使用映射保存已遍历的值
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let tmp = map[target - nums[i]];
    if (tmp !== undefined && tmp !== i) {
      return [tmp, i];
    }
    map[nums[i]] = i;
  }
};
// @lc code=end
