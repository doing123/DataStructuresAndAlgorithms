/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  // TODO 通过：218/220
  let result = 0;
  nums.sort((a, b) => a - b); // 升序排列
  recursive(0, 0, []);
  return result;

  function recursive(start, count, arr) {
    if (count == 3) {
      result++;
      return;
    }
    for (let i = start; i < nums.length; i++) {
      if (arr.length == 2 && arr[0] + arr[1] <= nums[i]) break;
      recursive(i + 1, count + 1, arr.concat(nums[i]));
    }
  }
};
// @lc code=end
