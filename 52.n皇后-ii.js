/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  // 1.DFS
  let result = 0;
  let cols = new Set();
  let pie = new Set();
  let na = new Set();

  let helper = (row) => {
    if (row >= n) result++;
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || pie.has(row + col) || na.has(row - col)) continue;
      cols.add(col);
      pie.add(row + col);
      na.add(row - col);

      helper(row + 1); // 下一行

      cols.delete(col);
      pie.delete(row + col);
      na.delete(row - col);
    }
  };

  helper(0); // 从第一行开始
  return result;
};
// @lc code=end
