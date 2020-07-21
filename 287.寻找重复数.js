/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // TODO 1.二分查找
  // 2.快慢指针
  let slow = 0;
  let fast = 0;
  do {
    slow = nums[slow]; // 慢指针走一步，快指针走两步
    fast = nums[nums[fast]];
  } while (slow != fast);

  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;

  // TODO 3.位运算
};
// @lc code=end
