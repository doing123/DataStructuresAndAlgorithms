/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  // 1.
  var isQueen = (queens, colNew, rowNew) =>
    queens.every(
      (col, row) =>
        col !== colNew && Math.abs(colNew - col) !== Math.abs(rowNew - row)
    );

  var res = [];
  var helper = (row, queens) => {
    if (row === n && queens.length === n) {
      return res.push(
        queens.map((col) => {
          var arr = new Array(n).fill('.');
          arr.splice(col, 1, 'Q');
          return arr.join('');
        })
      );
    }
    for (var col = 0; col < n; col++) {
      queens = queens.slice();
      // 第一行
      if (row === 0 || isQueen(queens, col, row)) {
        queens[row] = col; // 保存列，即每一行皇后的位置
        helper(row + 1, queens);
      }
    }
  };
  helper(0, []);
  return res;
};
// @lc code=end
