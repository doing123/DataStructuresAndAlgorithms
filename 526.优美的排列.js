/*
 * @lc app=leetcode.cn id=526 lang=javascript
 *
 * [526] 优美的排列
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {
  // 边回溯边统计
  if (N === 0) return 0;
  let result = 0;
  let nums = [];
  for (let i = 1; i <= N; i++) {
    nums.push(i);
  }
  backtrack([], nums);
  return result;

  function backtrack(arr, nums) {
    // 符合优美数组条件，统计 +1
    if (
      arr.length === N &&
      (arr.length % arr[arr.length - 1] === 0 ||
        arr[arr.length - 1] % arr.length === 0)
    ) {
      result++;
      return;
    }
    if (
      nums.length === 0 ||
      (arr.length !== 0 &&
        arr.length % arr[arr.length - 1] !== 0 &&
        arr[arr.length - 1] % arr.length !== 0)
    ) {
      return; // 有不符合的直接返回
    }

    for (let i = 0; i < nums.length; i++) {
      backtrack(
        arr.concat(nums[i]),
        nums.slice(0, i).concat(nums.slice(i + 1)) // 已使用的踢出
      );
    }
  }
};
// @lc code=end
