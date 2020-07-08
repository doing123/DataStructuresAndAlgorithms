/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // let len = nums.length;
  // let count = 0;
  // for (let i = 0; i < len; i++) {
  //   if (nums[i] == 1) {
  //     continue;
  //   } else if (nums[i] == 0) {
  //     nums.unshift(...nums.splice(i, 1));
  //   } else if (nums[i] == 2) {
  //     nums.push(...nums.splice(i, 1));
  //     i--;
  //   }
  //   if (++count >= len) return;
  // }

  // 三指针
  let left = 0; // 0 的最右边界
  let right = nums.length - 1; // 2 的最左边界
  let i = 0; // 当前
  while (i <= right) {
    if (nums[i] == 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
      i++;
      continue;
    }
    if (nums[i] == 2) {
      [nums[right], nums[i]] = [nums[i], nums[right]];
      right--;
      continue;
    }
    if (nums[i] == 1) {
      i++;
      continue;
    }
  }
};
// @lc code=end
