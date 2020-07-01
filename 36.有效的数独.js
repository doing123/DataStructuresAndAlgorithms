/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let columnMapArr = Array.apply(null, { length: board.length }).map(
    () => new Map()
  );
  let boxMapArr = Array.apply(null, { length: board.length }).map(
    () => new Map()
  );

  for (let i = 0; i < board.length; i++) {
    let current = board[i];
    let rowMap = new Map();
    for (let j = 0; j < current.length; j++) {
      if (current[j] == '.') continue;
      // 验证当前行
      if (rowMap.has(current[j])) {
        return false;
      } else {
        rowMap.set(current[j], true);
      }

      // 当前列
      if (columnMapArr[j].has(current[j])) {
        return false;
      } else {
        columnMapArr[j].set(current[j], true);
      }

      // 验证3*3小宫格
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (boxMapArr[boxIndex].has(current[j])) {
        return false;
      } else {
        boxMapArr[boxIndex].set(current[j], true);
      }
    }
  }

  return true;
};
// @lc code=end
