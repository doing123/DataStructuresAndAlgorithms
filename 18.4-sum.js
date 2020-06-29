/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const result = [];
  if (nums.length < 4) return result;
  nums.sort((a, b) => a - b);
  const len = nums.length;
  for (let i = 0; i < len - 3; i++) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      let l = i + 1;
      let m = l + 1;
      while (l < len - 2) {
        let r = len - 1;
        if (l === i + 1 || nums[l] > nums[l - 1]) {
          while (m < r) {
            // m < len - 1 多余
            const sum = nums[i] + nums[l] + nums[m] + nums[r];
            if (sum === target) {
              result.push([nums[i], nums[l], nums[m], nums[r]]);
              m++;
              r--;
              while (m < r && nums[m] === nums[m - 1]) {
                m++;
              }
              while (m < r && nums[r] === nums[r + 1]) {
                r--;
              }
            } else if (sum > target) {
              r--;
            } else if (sum < target) {
              m++;
            }
          }
        }
        l++;
        m = l + 1;
      }
    }
  }

  return result;
};
// @lc code=end
