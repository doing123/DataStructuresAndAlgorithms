/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let tmp = map[target - nums[i]];
    if (tmp !== undefined && tmp !== i) {
      return [i, tmp];
    }
    map[nums[i]] = i;
  }
};
