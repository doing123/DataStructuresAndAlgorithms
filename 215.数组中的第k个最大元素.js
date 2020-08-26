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
  // 4.归并排序
  let len = nums.length;
  recursive(0, len - 1);
  return nums[len - k];

  function recursive(left, right) {
    if (left >= right) return;
    let mid = (left + right) >>> 1;
    recursive(left, mid);
    recursive(mid + 1, right);
    merge(left, mid, mid + 1, right);
  }

  function merge(l1, end1, l2, end2) {
    let arr = [];
    let index = 0;
    let i = l1;
    while (l1 <= end1 && l2 <= end2) {
      arr[index++] = nums[l1] < nums[l2] ? nums[l1++] : nums[l2++];
    }
    while (l1 <= end1) {
      arr[index++] = nums[l1++];
    }
    while (l2 <= end2) {
      arr[index++] = nums[l2++];
    }
    // 将有序合并后的数组修改回原数组
    for (let k = 0; k < index; k++) {
      nums[i + k] = arr[k];
    }
  }
};
// @lc code=end
