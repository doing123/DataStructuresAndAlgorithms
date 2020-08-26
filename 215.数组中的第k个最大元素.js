/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 2.选择排序
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (nums[j] > nums[maxIndex]) {
        maxIndex = j;
      }
    }
    [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]];
    if (k == i + 1) {
      return nums[i];
    }
  }
};
// @lc code=end
