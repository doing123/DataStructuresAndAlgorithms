/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let one = nums[0]; // 第一大
  let two = -Infinity; // 第二大
  let three = -Infinity; // 第三大
  for (let i = 0; i < nums.length; i++) {
    let item = nums[i];
    if (item == one || item == two || item == three) continue;
    if (item > one) {
      three = two;
      two = one;
      one = item;
    } else if (item > two) {
      three = two;
      two = item;
    } else if (item > three) {
      three = item;
    }
  }

  return nums.length >= 3 && three != -Infinity ? three : one;
};
// @lc code=end
