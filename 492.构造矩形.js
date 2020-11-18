/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  // 1. 开平方 取整，获得最近平方根且可被整除的整数
  let W = ~~Math.sqrt(area);
  while (area % W !== 0) W--;
  return [area / W, W];
};
// @lc code=end
