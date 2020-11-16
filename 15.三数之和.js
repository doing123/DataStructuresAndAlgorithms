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
  // 1.暴力： 三层嵌套循环 // 不通过
  let result = [];
  let len = nums.length;
  let set = new Set();
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let tmpArr = [nums[i], nums[j], nums[k]];
          let tmpStr = tmpArr.sort().toString();
          if (!set.has(tmpStr)) {
            result.push(tmpArr);
            set.add(tmpStr);
          }
        }
      }
    }
  }

  return result;
  // 2.set + 两层循环
  // 3.sort 先排序，再一层循环 + 在后面数组查找两数之和等于当前值
};
// @lc code=end
