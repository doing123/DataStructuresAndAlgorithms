/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const result = [];
  result.push([1]);
  for (let i = 1; i < rowIndex + 1; i++) {
    const row = result[i - 1];
    const tmp = [1];
    for (let j = 1; j < i; j++) {
      tmp.push(row[j - 1] + row[j]);
    }
    tmp.push(1);
    result.push(tmp);
  }
  return result[rowIndex];
};
// @lc code=end
