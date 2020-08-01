/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  // 初次提交 没有考虑最大出现频数可能有多个
  let count = 0; // 最大出现频次
  let map = new Map(); // 记录每一个元素的出现次数
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
    if (map.get(nums[i]) > count) {
      count = map.get(nums[i]);
    }
  }

  let distance = nums.length; // 最大为数组的长度
  let map2 = new Map();
  for (let i = 0; i < nums.length; i++) {
    map2.set(nums[i], map2.has(nums[i]) ? map2.get(nums[i]) + 1 : 1);
    if (map2.get(nums[i]) == count) {
      let start = nums.indexOf(nums[i]);
      distance = Math.min(distance, i - start + 1);
    }
  }
  return distance;
};
// @lc code=end
