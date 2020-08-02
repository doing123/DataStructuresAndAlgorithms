/*
 * @lc app=leetcode.cn id=780 lang=javascript
 *
 * [780] 到达终点
 */

// @lc code=start
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
  // 2.回溯
  while (tx >= sx && ty >= sy) {
    if (sx === tx && sy === ty) return true;
    if (tx > ty) {
      tx -= ty;
    } else {
      ty -= tx;
    }
  }
  return false;
};
// @lc code=end
