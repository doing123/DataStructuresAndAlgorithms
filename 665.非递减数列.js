/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let len = nums.length; // TODO
  let count = 0;
  if (nums[0] > nums[1]) {
    count++;
    nums[0] = nums[1];
  }

  for (let i = 1; i < len; i++) {
    // 非递减，进行最优化调整
    if (nums[i] > nums[i + 1]) {
      count++;
      if (nums[i - 1] <= nums[i + 1]) {
        // 左边的数比右边的数小，如：3，5，4
        nums[i] = nums[i - 1];
      } else {
        // 左边的数比右边的数大，如：10，11，3
        nums[i + 1] = nums[i];
      }
    }
  }

  return count <= 1;
};
// @lc code=end
