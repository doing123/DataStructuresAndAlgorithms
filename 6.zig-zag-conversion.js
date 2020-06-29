/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const len = s.length;
  if (len <= 1 || numRows <= 1) return s;
  let i = 0;
  let j = 0;
  const result = Array.apply(null, { length: numRows }).map(() => []);
  while (i < len) {
    while (i < len && j < numRows - 1) {
      result[j].push(s[i]);
      i++;
      j++;
    }
    while (i < len && j > 0) {
      result[j].push(s[i]);
      i++;
      j--;
    }
  }
  return result.flat().join('');
};
// @lc code=end
