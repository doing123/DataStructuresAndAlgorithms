/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  // 1.回溯
  let len = nums.length;
  if (len <= 1) return [];
  let result = [];
  let set = new Set(); // 存储每个合格的路径，去重
  backtrack(0, []);
  return result;

  function backtrack (start, arr) {
    if (arr.length >= 2) {
      const path = arr.toString();
      if (!set.has(path)) {
        set.add(path);
        result.push(arr.slice());
      }
    }
    for (let i = start; i < len; i++) {
      const prev = arr[arr.length - 1];
      let currVal = nums[i];
      if (arr.length === 0 || prev <= currVal) {
        arr.push(currVal); // 选择使用当前数字
        backtrack(i + 1, arr);
        arr.pop(); // 撤销
      }
    }
  }
};
// @lc code=end
