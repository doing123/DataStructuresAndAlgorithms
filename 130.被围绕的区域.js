/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  // 1.遍历四个边，用 DFS 算法把那些与边界相连的 O 换成一个特殊字符，如 #；
  let row = board.length;
  if (!row) return;
  let col = board[0].length;

  // 首尾行边界开始，深度优先遍历 0
  for (let i = 0; i < col; i++) {
    dfs(board, 0, i, row, col);
    dfs(board, row - 1, i, row, col);
  }

  // 首尾列边界开始，深度优先遍历 0
  for (let i = 0; i < row; i++) {
    dfs(board, i, 0, row, col);
    dfs(board, i, col - 1, row, col);
  }

  // 然后再遍历整个棋盘，把剩下的 O 换成 X ，把 # 恢复成 O。
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
      if (board[i][j] === '#') {
        board[i][j] = 'O';
      }
    }
  }
};

function dfs (board, i, j, row, col) {
  if (i < 0 || i >= row || j < 0 || j >= col || board[i][j] === 'X') return;
  if (board[i][j] === 'O') {
    board[i][j] = '#';
    dfs(board, i - 1, j, row, col);
    dfs(board, i + 1, j, row, col);
    dfs(board, i, j - 1, row, col);
    dfs(board, i, j + 1, row, col);
  }
}
// @lc code=end
