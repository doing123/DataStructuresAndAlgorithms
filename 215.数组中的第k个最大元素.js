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
  // 5-1.快排: 划分交换排序，in-palce算法，不占用额外内存
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
    let p = left + 1;
    while (p <= right) {
      while (p <= right && nums[right] > base) right--;
      while (p <= right && nums[p] < base) p++;
      if (p <= right) {
        [nums[p], nums[right]] = [nums[right], nums[p]];
        p++;
        right--;
      }
    }
    [nums[left], nums[right]] = [nums[right], nums[left]]; // 修改基数
    return right;
  }
};
// @lc code=end
