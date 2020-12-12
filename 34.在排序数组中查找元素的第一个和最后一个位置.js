/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = leftBound(nums, target);
  let right = rightBound(nums, target);
  return [left, right];
};

function leftBound (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >>> 1;
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] === target) {
      right = mid - 1; // 收缩右边界
    }
  }
  // 处理越界情况
  if (left > nums.length || nums[left] !== target) return -1;
  return left;
}

function rightBound (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >>> 1;
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] === target) {
      left = mid + 1; // 收缩左边界
    }
  }
  // 处理越界情况
  if (right < 0 || nums[right] !== target) return -1;
  return right;
}
// @lc code=end
