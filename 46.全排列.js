/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // 1.回溯，优化 使用全局备忘录数组
  let result = [];
  let arr = [];
  backtrack(nums, []);
  return result;

  function backtrack (nums) {
    if (arr.length === nums.length) {
      result.push([...arr]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // 排除不合法的选择
      if (arr.includes(nums[i])) continue;

      arr.push(nums[i]); // 做选择
      backtrack(nums); // 进入下一层决策树
      arr.pop(); // 取消选择
    }
  }
};
// @lc code=end
