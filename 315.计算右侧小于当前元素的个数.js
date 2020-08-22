/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  // 1.暴力
  let len = nums.length;
  if (len == 0) return [];
  let counts = [];
  for (let i = 0; i < len; i++) {
    let j = i + 1;
    let count = 0;
    while (j < len) {
      if (nums[j] < nums[i]) {
        count++;
      }
      j++;
    }
    counts.push(count);
  }
  return counts;
};
// @lc code=end
