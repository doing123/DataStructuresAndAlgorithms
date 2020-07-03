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
  let left = 0;
  let right = height.length - 1;
  let count = 0;
  let leftMax = 0;
  let rightMax = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (leftMax <= height[left]) {
        leftMax = height[left];
      } else {
        count += leftMax - height[left];
      }
      left++;
    } else {
      if (rightMax <= height[right]) {
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
