/*
 * @lc app=leetcode.cn id=457 lang=javascript
 *
 * [457] 环形数组循环
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === 0) continue;
    let set = new Set();
    let item = nums[i];
    let flag = item > 0; // 前后两个方向都可
    let index = i;
    while (item !== 0) {
      if (flag != item > 0) break;
      if (set.has(index) && set.size > 1) return true;
      set.add(index);
      let next = (((nums[index] + index) % len) + len) % len; // 加上 nums.length * 1000，考虑负的索引
      if (next === index) break;
      index = next;
      item = nums[index];
    }
  }
  return false;
};
// @lc code=end
