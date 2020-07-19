/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 二分查找
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = left + ((right - left) >> 1); // (right - left) >> 1 等同于 Math.floor((right - left) / 2)
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] == nums[right]) {
      right--;
    } else {
      right = mid;
    }
  }

  return nums[left];
};
// @lc code=end
