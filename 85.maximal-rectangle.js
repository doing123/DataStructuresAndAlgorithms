/*
 * @lc app=leetcode id=85 lang=javascript
 *
 * [85] Maximal Rectangle
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
// 1.
/* var maximalRectangle = function (matrix) {
  let res = 0
  let height = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      height[j] = matrix[i][j] === '0' ? 0 : (1 + (height[j] || 0))
    }
    res = Math.max(res, largestRectangleArea(height))
  }
  return res
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
} */

// 2.
/* var maximalRectangle = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0
  let res = 0
  let m = matrix.length
  let n = matrix[0].length
  let height = Array(n + 1).fill(0)
  for (let i = 0; i < m; i++) {
    let stack = []
    for (let j = 0; j < n + 1; j++) {
      if (j < n) {
        height[j] = matrix[i][j] === '1' ? height[j] + 1 : 0
      }
      while (stack.length !== 0 && height[stack[stack.length - 1]] > height[j]) {
        let cur = stack.pop()
        res = Math.max(res, height[cur] * (stack.length === 0 ? j : (j - stack[stack.length - 1] - 1)))
      }
      stack.push(j)
    }
  }

  return res
} */

// 3.
var maximalRectangle = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return 0
  let res = 0
  let m = matrix.length
  let n = matrix[0].length
  let height = Array(n + 1).fill(0)
  for (let i = 0; i < m; i++) {
    let stack = []
    for (let j = 0; j < n; j++) {
      height[j] = matrix[i][j] === '1' ? height[j] + 1 : 0
    }
    for (let j = 0; j < n + 1; j++) {
      while (stack.length !== 0 && height[stack[stack.length - 1]] > height[j]) {
        let cur = stack.pop()
        res = Math.max(res, height[cur] * (stack.length === 0 ? j : (j - stack[stack.length - 1] - 1)))
      }
      stack.push(j)
    }
  }

  return res
}

// TODO: 尝试其他
// maximalRectangle([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']])
