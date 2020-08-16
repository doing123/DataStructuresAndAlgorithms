/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);
  let result = 0;

  for (let house of houses) {
    // 二分法找不小于house的第一个值
    let left = 0;
    let right = heaters.length - 1;
    // 如果 right - left <= 1 就说明了房屋处已经于加热站left和加热站right中间
    while (left + 1 < right) {
      let mid = (right + left) >>> 1;
      if (heaters[mid] == house) {
        left = mid;
        right = mid;
      } else if (heaters[mid] < house) {
        left = mid;
      } else {
        right = mid;
      }
    }

    // 求出每个房间距离最近的供暖器，前后供暖器最近的那个
    let min = Math.min(
      Math.abs(house - heaters[left]),
      Math.abs(house - heaters[right])
    );

    result = Math.max(result, min);
  }
  return result;
};
// @lc code=end
