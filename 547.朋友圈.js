/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  // 1.DFS + floodfill 深度优先+染色
  if (!M || !M[0]) return 0;
  let row = M.length;
  let col = M[0].length;
  let result = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (M[i][j] === 1) {
        result++;
        helper(i, j);
      }
    }
  }
  return result;

  function helper (i, j) {
    if (i < 0 || i >= row || j < 0 || j >= col || M[i][j] === 0) {
      return;
    }
    M[i][j] = 0;
    for (let k = 0; k < row; k++) {
      helper(i, k); // 当前行
      helper(k, j); // 当前列
    }
  }
};
// @lc code=end
