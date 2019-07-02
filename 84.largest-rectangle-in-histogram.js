/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let res = 0
  let len = heights.length
  for (let i = 0; i < len; i++) {
    if (i + 1 < len && heights[i] <= heights[i + 1]) {
      continue
    }
    let minH = heights[i]
    for (let j = i; j >= 0; j--) {
      minH = Math.min(minH, heights[j])
      let area = minH * (i - j + 1)
      res = Math.max(res, area)
    }
  }

  return res
}
