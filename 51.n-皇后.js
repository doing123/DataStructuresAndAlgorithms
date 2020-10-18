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
  // 2.剪枝
  let res = [];
  let cols = new Set();
  let pie = new Set();
  let na = new Set();
  let helper = (row, arr) => {
    if (row >= n) {
      res.push(arr);
    }
    for (var col = 0; col < n; col++) {
      if (cols.has(col) || pie.has(row + col) || na.has(row - col)) continue;
      cols.add(col);
      pie.add(row + col);
      na.add(row - col);

      helper(row + 1, arr.concat(col));

      cols.delete(col);
      pie.delete(row + col);
      na.delete(row - col);
    }
  };
  helper(0, []); // 参数：行、列数组
  return res.map((item) => {
    return item.map((col) => {
      var arr = new Array(n).fill('.');
      arr.splice(col, 1, 'Q');
      return arr.join('');
    });
  });
};
// @lc code=end
