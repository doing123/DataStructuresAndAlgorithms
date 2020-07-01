/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // 只理解了暴力破解，
  // TODO：递归 + 回溯 + 位运算
  let isValid = (row, col, num) => {
    for (let i = 0; i < 9; i++) {
      let boxRow = parseInt(row / 3) * 3;
      let boxCol = parseInt(col / 3) * 3;
      if (
        board[row][i] == num ||
        board[i][col] == num ||
        board[boxRow + parseInt(i / 3)][boxCol + (i % 3)] == num
      ) {
        return false;
      }
    }

    return true;
  };

  let solve = (board) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] == '.') {
          for (let num = 1; num < 10; num++) {
            if (isValid(i, j, num)) {
              board[i][j] = String(num);
              if (solve(board)) {
                return true;
              }
              board[i][j] = '.';
            }
          }
          return false;
        }
      }
    }
    return true;
  };

  solve(board);
  return board;
};
// @lc code=end
