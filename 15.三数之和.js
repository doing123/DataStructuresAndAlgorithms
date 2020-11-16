/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 2.暴力 + map
  let result = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] === nums[i - 1]) continue; // 去重
    let target = nums[i]; // 求两数之和等于 a;
    let map = new Map();
    for (let j = i + 1; j < len; j++) {
      let b = nums[j];
      let c = -target - b;
      if (result.length) {
        let [x, y, z] = result[result.length - 1];
        if (y === b && z === c) continue;
      }

      if (map.has(c)) {
        result.push([target, b, c]);
      } else {
        map.set(b, true);
      }
    }
  }

  return result;
  // 2.set + 两层循环
  // 3.sort 先排序，再一层循环 + 在后面数组查找两数之和等于当前值
};
// @lc code=end
