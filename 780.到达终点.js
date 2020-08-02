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
var reachingPoints = function(sx, sy, tx, ty) {
  // 1.递归
  if (sx > tx || sy > ty) return false;
  if (sx == tx || sy == ty) return true;
  return reachingPoints(sx + sy, sy, tx, ty) || reachingPoints(sx, sx + sy, tx, ty);
};
// @lc code=end
