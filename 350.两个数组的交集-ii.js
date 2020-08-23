/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 1.哈希存值
  let result = [];
  let map = {};

  // 统计 nums1 中元素的出现次数
  for (const item of nums1) {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
  }

  for (const val of nums2) {
    if (map[val] > 0) {
      result.push(val);
      map[val]--;
    }
  }

  return result;
};
// @lc code=end
