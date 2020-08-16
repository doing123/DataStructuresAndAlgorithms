/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小移动次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  // TODO n-1个元素加1相当于1个元素减1，那么最后只能是所有元素都等于最小值
  let min = Math.min.apply(null, nums);
  let result = 0;
  nums.forEach((item) => {
    result += item - min;
  });
  return result;
};
// @lc code=end
