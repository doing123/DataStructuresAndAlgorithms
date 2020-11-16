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
  // 3.双指针
  let result = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    let n1 = nums[i];
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue; // 去重

    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      let n2 = nums[left];
      let n3 = nums[right];
      let sum = n1 + n2 + n3;
      if (sum === 0) {
        result.push([n1, n2, n3]);
        // 去重
        while (left < right && nums[left] === n2) left++;
        while (left < right && nums[right] === n3) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};
// @lc code=end
