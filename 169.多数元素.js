/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 2.Map 计数
  let result = 0;
  let map = new Map();
  for (let item of nums) {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  }

  let tmp = 0;
  for (const [key, val] of map) {
    if (val > tmp) {
      result = key;
      tmp = val;
    }
  }

  return result;
};
// @lc code=end
