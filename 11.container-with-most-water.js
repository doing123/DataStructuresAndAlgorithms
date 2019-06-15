/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 1.暴力求解，事件复杂度O(n^2)
  let max = 0
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      max = Math.max(max, Math.min(height[i], height[j]) * (j - i))
    }
  }

  return max

  // 2.两个指针，计算面积，每次比较这两个指针，低的一边移动指针
  /* let left = 0
  let right = height.length - 1
  let max = 0
  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left))
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return max */
}
