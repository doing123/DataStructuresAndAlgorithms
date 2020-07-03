/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (height.length < 3) return 0;
  let count = 0,
    left = 0,
    right = height.length - 1,
    leftMax = 0,
    rightMax = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        count += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        count += rightMax - height[right];
      }
      right--;
    }
  }
  return count;
};
// @lc code=end
