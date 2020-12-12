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
  // 4.使用归纳的 nSum
  nums.sort((a, b) => a - b);
  let len = nums.length;
  return nSum(3, 0, 0);

  function nSum (n, start, target) {
    let result = [];
    if (n < 2 || len < n) return result;
    if (n === 2) {
      // 两数之和
      let left = start;
      let right = len - 1;
      while (left < right) {
        let n1 = nums[left];
        let n2 = nums[right];
        let sum = n1 + n2;
        if (sum > target) {
          while (left < right && nums[right] === n2) right--;
        } else if (sum < target) {
          while (left < right && nums[left] === n1) left++;
        } else if (sum === target) {
          result.push([n1, n2]);
          while (left < right && nums[right] === n2) right--;
          while (left < right && nums[left] === n1) left++;
        }
      }
    } else {
      for (let i = start; i < len; i++) {
        let sub = nSum(n - 1, i + 1, target - nums[i]);
        // 拼接上当前值
        for (let item of sub) {
          item.push(nums[i]);
          result.push(item);
        }

        while (i < len && nums[i] === nums[i + 1]) i++;
      }
    }
    return result;
  }
};
// @lc code=end
