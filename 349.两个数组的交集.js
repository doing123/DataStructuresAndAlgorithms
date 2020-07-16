/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      set.add(nums1[i]);
    }
  }
  return [...set];
};
// @lc code=end
