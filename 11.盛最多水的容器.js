/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 双指针
  let left = 0;
  let right = height.length - 1;
  let result = 0;
  while (left < right) {
    result = Math.max(
      result,
      Math.min(height[left], height[right]) * (right - left)
    );
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};
// @lc code=end
