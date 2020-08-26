/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 5-1.快排
  let len = nums.length;
  recursive(0, len - 1);
  return nums[len - k];

  function recursive(left, right) {
    if (left >= right) return;
    let base = partition(left, right);
    recursive(left, base - 1);
    recursive(base + 1, right);
  }

  function partition(left, right) {
    let base = nums[left]; // 取第一个数为基数
    while (left < right) {
      while (left < right && nums[right] >= base) right--;
      nums[left] = nums[right];
      while (left < right && nums[left] < base) left++;
      nums[right] = nums[left];
    }
    nums[left] = base; // 修改基数
    return left;
  }
};
// @lc code=end
