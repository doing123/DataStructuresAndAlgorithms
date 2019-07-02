/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  let res = 0
  let height = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      height[j] = matrix[i][j] === '0' ? 0 : (1 + (height[j] || 0))
    }
    res = Math.max(res, largestRectangleArea(height))
  }
  return res
  // TODO:待进一步优化
}

function largestRectangleArea (heights) {
  let res = 0
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
  return res
}

maximalRectangle([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']])
