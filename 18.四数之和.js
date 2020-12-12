/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  // 1.结合两数之和、三数之和归纳
  nums.sort((a, b) => a - b);
  let len = nums.length;
  return nSum(4, 0, target);

  /**
   * @param {number} n n数之和
   * @param {number} start 遍历数组的起始位置下标
   * @param {number} target 和
   */
  function nSum (n, start, target) {
    let result = [];
    if (n < 2 || len < n) return result;
    if (n === 2) {
      // 求两数之和
      let left = start;
      let right = len - 1;
      while (left < right) {
        let leftVal = nums[left];
        let rightVal = nums[right];
        let sum = leftVal + rightVal;
        if (sum < target) {
          while (left < right && nums[left] === leftVal) left++;
        } else if (sum > target) {
          while (left < right && nums[right] === rightVal) right--;
        } else {
          result.push([leftVal, rightVal]);
          while (left < right && nums[left] === leftVal) left++;
          while (left < right && nums[right] === rightVal) right--;
        }
      }
    } else {
      for (let i = start; i < len; i++) {
        let sub = nSum(n - 1, i + 1, target - nums[i]);
        for (let item of sub) {
          // (n-1)Sum 加上 nums[i] 就是 nSum
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
