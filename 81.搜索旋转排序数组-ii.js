/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // 去重
    while (left < right && nums[left] == nums[left + 1]) left++;
    while (left < right && nums[right] == nums[right - 1]) right--;

    let mid = Math.floor(left + (right - left) / 2);
    // 存在返回true
    if (nums[mid] === target) {
      return true;
    }

    // 左边有序，转折点在右半边
    if (nums[left] <= nums[mid]) {
      // 右边收缩
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        // 左边收缩
        left = mid + 1;
      }
    } else {
      // 右边有序
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
};
// @lc code=end
