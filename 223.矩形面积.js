/*
 * @lc app=leetcode.cn id=223 lang=javascript
 *
 * [223] 矩形面积
 */

// @lc code=start
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  // 参数对应：左、下、右、上
  let total = (C - A) * (D - B) + (G - E) * (H - F);
  // 没有重叠的情况
  if (E >= C || F >= D || G <= A || H <= B) return total;
  // 取右上边界（A:E,B:F）的相对小的值，左下边界（C:G,D:H）相对大的值
  let left = Math.max(A, E);
  let bottom = Math.max(B, F);
  let right = Math.min(C, G);
  let top = Math.min(D, H);
  return total - (right - left) * (top - bottom);
};
// @lc code=end
