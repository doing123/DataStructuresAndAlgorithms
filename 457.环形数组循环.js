/*
 * @lc app=leetcode.cn id=457 lang=javascript
 *
 * [457] 环形数组循环
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
  // 双指针，慢指针前进一步，快指针前进两步
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) continue;
    let item = nums[i];
    let slow = i;
    let fast = getnext(slow);
    while (item * nums[fast] > 0 && item * nums[getnext(fast)] > 0) {
      if (slow === fast) {
        if (slow === getnext(slow)) {
          break;
        }
        return true;
      }

      slow = getnext(slow);
      fast = getnext(getnext(fast));
    }

    // 标记已经走过的结点，提高运算效率，方法就是将慢指针重置为i，再用一个 while 循环，条件是 nums[i] 和 慢指针指的数正负相同
    slow = i;
    while (item * nums[slow] > 0) {
      let next = getnext(slow); //然后计算下一个位置，并且 nums[slow] 标记为0，并且慢指针移动到 next 位置。
      nums[slow] = 0;
      slow = next;
    }
  }
  return false;

  function getnext(index) {
    return (((nums[index] + index) % len) + len) % len;
  }
};
// @lc code=end
