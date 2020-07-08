/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      count = 0;
    }
    if (nums[i] == nums[i - 1] && count == 2) {
      let j = i;
      while (j < nums.length) {
        if (nums[j] != nums[j + 1]) {
          break;
        }
        j++;
      }
      nums.splice(i, j - i + 1);
      count = 0;
      i--;
    }
    count++;
  }

  return nums.length;
};
// @lc code=end
