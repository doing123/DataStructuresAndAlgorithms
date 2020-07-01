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
  let columnMapArr = Array.apply(null, { length: 9 }).map(() => new Map()); // 列
  let boxMapArr = Array.apply(null, { length: 9 }).map(() => new Map()); // 小宫格

  for (let i = 0; i < 9; i++) {
    let current = board[i];
    let rowMap = new Map(); // 行
    for (let j = 0; j < 9; j++) {
      if (current[j] == '.') continue;

      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      // 验证当前值
      if (
        rowMap.has(current[j]) ||
        columnMapArr[j].has(current[j]) ||
        boxMapArr[boxIndex].has(current[j])
      ) {
        return false;
      }

      rowMap.set(current[j], true);
      columnMapArr[j].set(current[j], true);
      boxMapArr[boxIndex].set(current[j], true);
    }
  }

  return true;
};
// @lc code=end
