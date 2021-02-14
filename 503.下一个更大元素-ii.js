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
  // 通过 % 运算符求模（余数），来获得环形特效
  let len = nums.length;
  let result = new Array(len);
  const stack = []; // 保存元素

  // 假如这个数组长度翻倍了
  for (let i = len * 2 - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i % len]) {
      stack.pop();
    }
    result[i % len] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(nums[i % len]);
  }

  return result;
};
// @lc code=end
