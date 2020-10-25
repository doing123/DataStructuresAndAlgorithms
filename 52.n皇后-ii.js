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
  // 2.位运算
  let result = 0;

  let DFS = (row, col, pie, na) => {
    if (row >= n) {
      result++;
      return;
    }

    // 得到当前所有空位bits
    // ~(col | pie | na) 或在一起，取反得到32位所有可用的为1的位
    // (1 << n) - 1 筛选的作用 只保留从最低位开始的 n 位可用的1
    let bits = ~(col | pie | na) & ((1 << n) - 1);
    while (bits > 0) {
      // 空位不为0
      let p = bits & -bits; // 得到最低位的1，即放Q的位置  -x: x取反加1
      // 参数：行数，合并列，pie左移一位，na右移一位
      DFS(row + 1, col | p, (pie | p) << 1, (na | p) >> 1);
      bits &= bits - 1; // 去掉最低位的1
    }
  };

  DFS(0, 0, 0, 0);
  return result;
};
// @lc code=end
