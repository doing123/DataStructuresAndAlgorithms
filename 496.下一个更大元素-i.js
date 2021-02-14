/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let result = [];
  for (let val of nums1) {
    let index = nums2.findIndex((item) => item === val);
    let flag = true;
    for (let i = index + 1; i < nums2.length; i++) {
      if (nums2[i] > val) {
        result.push(nums2[i]);
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(-1);
    }
  }

  return result;
};
// @lc code=end
