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
  // 1.
  /* let res = 0
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

  return res */

  // 2.利用栈
  /* let res = 0
  let stack = []
  heights.push(0)
  for (let i = 0; i < heights.length; i++) {
    if (stack.length === 0 || heights[stack[stack.length - 1]] < heights[i]) {
      stack.push(i)
    } else {
      let cur = stack.pop()
      res = Math.max(res, heights[cur] * (stack.length === 0 ? i : (i - stack[stack.length - 1] - 1)))
      i--
    }
  }

  return res */

  // 3.栈 优化
  let res = 0
  let stack = []
  heights.push(0)
  for (let i = 0; i < heights.length; i++) {
    while (stack.length !== 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      let cur = stack.pop()
      res = Math.max(res, heights[cur] * (stack.length === 0 ? i : (i - stack[stack.length - 1] - 1)))
    }
    stack.push(i)
  }
  return res
}

// largestRectangleArea([2, 1, 5, 6, 2, 3])
