/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // 处理每一圈的数据遍历过程
  let result = []
  let len1 = matrix.length
  for (let i = 0; i < len1; i++) {
    if (i === 0) {
      result = result.concat(matrix[i])
    } else if (i === len1 - 1) {
      result = result.concat(matrix[i].reverse())
    } else {
      // 增加边界检查
      if (matrix[i].length) {
        result.push(matrix[i].pop())
      }
    }
  }
  // 去除首位元素
  matrix.shift()
  matrix.pop()
  for (let i = matrix.length - 1; i >= 0; i--) {
    if (matrix[i].length) {
      result.push(matrix[i].shift())
    }
  }

  if (matrix.length) {
    return result.concat(spiralOrder(matrix))
  }

  return result
}
