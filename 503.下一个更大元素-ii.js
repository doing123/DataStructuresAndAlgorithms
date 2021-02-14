/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let result = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    const val = nums[i];
    let flag = true;
    for (let j = i + 1; j < len; j++) {
      if (nums[j] > val) {
        flag = false;
        result.push(nums[j]);
        break;
      }
    }
    if (!flag) continue;

    for (let j = 0; j < i; j++) {
      if (nums[j] > val) {
        flag = false;
        result.push(nums[j]);
        break;
      }
    }

    if (flag) result.push(-1);
  }

  return result;
};
// @lc code=end
