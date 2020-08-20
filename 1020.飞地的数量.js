/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 *
 * [1020] 飞地的数量
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function (A) {
  let [row, col] = [A.length, A[0].length];
  let result = 0;
  // 每行的首尾开始
  for (let i = 0; i < row; i++) {
    changeColor(i, 0);
    changeColor(i, col - 1);
  }

  // 首尾两行
  for (let i = 0; i < col; i++) {
    changeColor(0, i);
    changeColor(row - 1, i);
  }

  // 遍历，依然为1的即为不可达边界
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (A[i][j]) result++;
    }
  }
  return result;

  function changeColor(i, j) {
    if (A[i][j] === 1) {
      A[i][j] = 0; // 1 变为 0
      if (i > 0) changeColor(i - 1, j);
      if (i < row - 1) changeColor(i + 1, j);
      if (j > 0) changeColor(i, j - 1);
      if (j < col - 1) changeColor(i, j + 1);
    }
  }
};

// numEnclaves([[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]);
// @lc code=end
