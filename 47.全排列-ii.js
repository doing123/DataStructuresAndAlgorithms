/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  // 2.回溯
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let visited = new Array(len).fill(false);
  const result = [];

  backtrack(0, []);
  return result;

  function backtrack (count, arr) {
    if (count === len) {
      result.push([...arr]);
      return;
    }

    for (let i = 0; i < len; i++) {
      if (visited[i] || (nums[i] === nums[i - 1] && !visited[i - 1])) continue;
      arr.push(nums[i]);
      visited[i] = true;
      backtrack(count + 1, arr);
      visited[i] = false;
      arr.pop();
    }
  }
};
// @lc code=end
