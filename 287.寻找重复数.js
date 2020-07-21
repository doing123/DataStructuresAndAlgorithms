/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (map[curr]) {
      return curr;
    }
    map[curr] = true;
  }
};
// @lc code=end
