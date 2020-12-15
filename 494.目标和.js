/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
  // 2. 备忘录
  let len = nums.length;
  let memo = new Map();
  if (len === 0) return 0;
  return dp(0, S);

  function dp (i, rest) {
    // base case
    if (i === len) {
      if (rest === 0) return 1;
      return 0;
    }

    // 哈希表的 key
    let key = `${i},${rest}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    // 穷举
    let result = dp(i + 1, rest - nums[i]) + dp(i + 1, rest + nums[i]);
    memo.set(key, result);
    return result;
  }
};
// @lc code=end
