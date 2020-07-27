/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  let row = M.length;
  let col = M[0].length;
  let result = Array.from(new Array(row), () => {
    return new Array(col).fill(0);
  });

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let count = 0;
      for (let x of [-1, 0, 1]) {
        for (let y of [-1, 0, 1]) {
          if (isValid(i + x, j + y, row, col)) {
            count++;
            result[i][j] += M[i + x][j + y];
          }
        }
      }
      result[i][j] = Math.floor(result[i][j] / count);
    }
  }

  return result;

  function isValid(r, c, rows, cols) {
    return r < rows && r >= 0 && c < cols && c >= 0;
  }
};
// @lc code=end
