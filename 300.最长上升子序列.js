/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 2.二分查找
  let len = nums.length;
  if (len <= 1) return len;
  let tail = []; // 递增子序列
  tail.push(nums[0]);
  for (let i = 0; i < len; i++) {
    if (nums[i] > tail[tail.length - 1]) {
      tail.push(nums[i]);
    } else {
      // 二分查找递增子序列 tail 中 第一个大于当前值 nums[i] 的元素，替换为当前值
      let left = 0;
      let right = tail.length - 1;
      while (left < right) {
        let mid = (left + right) >>> 1;
        if (tail[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      tail[left] = nums[i];
    }
  }
  return tail.length;
};
// @lc code=end
