/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  // 2.数组长度加倍，利用单调栈算法模板
  let len = nums.length;
  let result = new Array(len * 2);
  const arr = [...nums, ...nums];
  const stack = []; // 保存元素
  for (let i = len * 2 - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }
    result[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(arr[i]);
  }

  return result.slice(0, len);
};
// @lc code=end
