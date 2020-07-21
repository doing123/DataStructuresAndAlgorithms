/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  // 八个方向的偏移量 上北下南左西右东：西--》东，北--》南
  const idx = [0, 1, 0, -1, -1, -1, 1, 1];
  const jdx = [1, 0, -1, 0, 1, -1, 1, -1];

  const copy = board.map((item) => {
    return [...item];
  });

  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy[i].length; j++) {
      let count = 0; //计数

      // 八个方向遍历
      for (let k = 0; k < 8; k++) {
        let x = i + idx[k];
        let y = j + jdx[k];

        // 超出边界
        if (x < 0 || y < 0 || x >= copy.length || y >= copy[i].length) continue;
        count += copy[x][y] ? 1 : 0;
      }

      // 规则 1、3
      if (copy[i][j] && (count < 2 || count > 3)) {
        board[i][j] = 0;
      }
      // 规则 4
      if (count === 3 && !copy[i][j]) {
        board[i][j] = 1;
      }
    }
  }
};
// @lc code=end
