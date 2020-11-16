/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // 2.map 保存 nums 的值
  const map = {};
  nums.forEach((item) => {
    map[item] = true;
  });

  let i = 1;
  while (i < Number.MAX_VALUE) {
    if (!map[i]) return i;
    i++;
  }
};
// @lc code=end
