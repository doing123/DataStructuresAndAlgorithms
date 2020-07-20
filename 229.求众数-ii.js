/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let result = [];
  let map = new Map();
  let len = nums.length;
  let target = len / 3;
  for (let i = 0; i < len; i++) {
    let curr = nums[i];
    if (map.get(curr) === true) continue;
    if (map.has(curr)) {
      map.set(curr, map.get(curr) + 1);
    } else {
      map.set(curr, 1);
    }
    if (map.get(curr) > target) {
      result.push(curr);
      map.set(curr, true);
    }
  }

  return result;
};
// @lc code=end
