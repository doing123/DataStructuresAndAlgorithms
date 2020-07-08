/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let row = board.length;
  let col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] == word[0]) {
        if (isExist(board, word, i, j, {})) {
          return true;
        }
      }
    }
  }
  return false;

  function isExist(board, word, i, j, visited) {
    if (word.length == 0) return true;
    const key = `${i}-${j}`;
    if (
      i >= row ||
      j >= col ||
      i < 0 ||
      j < 0 ||
      board[i][j] != word[0] ||
      visited[key]
    ) {
      return false;
    }
    word = word.slice(1);
    visited[key] = true;

    const success =
      isExist(board, word, i - 1, j, visited) ||
      isExist(board, word, i + 1, j, visited) ||
      isExist(board, word, i, j - 1, visited) ||
      isExist(board, word, i, j + 1, visited);

    // TODO success为false时，就是回溯
    visited[key] = success;
    return success;
  }
};
// @lc code=end
