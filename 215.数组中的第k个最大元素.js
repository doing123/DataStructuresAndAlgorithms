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
  // 2.插入排序
  let len = nums.length;
  for (let i = 1; i < len; i++) {
    let item = nums[i];
    let j = i;
    while (j >= 0 && nums[j - 1] > item) {
      nums[j] = nums[j - 1];
      j--;
    }
    nums[j] = item;
  }
  return nums[len - k];
};
// @lc code=end
