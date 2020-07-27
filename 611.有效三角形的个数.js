/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  // TODO 通过：218/220
  // let result = 0;
  // nums.sort((a, b) => a - b); // 升序排列
  // recursive(0, 0, []);
  // return result;

  // function recursive(start, count, arr) {
  //   if (count == 3) {
  //     result++;
  //     return;
  //   }
  //   for (let i = start; i < nums.length; i++) {
  //     if (arr.length == 2 && arr[0] + arr[1] <= nums[i]) break;
  //     recursive(i + 1, count + 1, arr.concat(nums[i]));
  //   }
  // }

  // 2.
  let len = nums.length;
  if (len < 3) return 0;
  let result = 0;
  nums.sort((a, b) => a - b);
  for (let i = len - 1; i > 1; i--) {
    let l = 0; // l、r较小边索引，i 较大边索引
    let r = i - 1;
    while (l < r) {
      // 左右两个指针对应的数之和大于当前所在值，则从left(包括left)开始的值都是符合条件的
      if (nums[l] + nums[r] > nums[i]) {
        result += r - l;
        r--;
      } else {
        l++;
      }
    }
  }
  return result;
};
// @lc code=end
