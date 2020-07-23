/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let result = [];
  // 通过索引号排序, 数字4放到索引3的位置,
  for (let i = 0; i < nums.length; i++) {
    // 当前项 item - 1，所对应的位置 不为 item，则互换
    while (nums[nums[i] - 1] != nums[i]) {
      // [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]]; // TODO 要记录位置，这里互换跑不通
      var tmp = nums[i];
      let index = nums[i] - 1; // 要保持这个位置
      nums[i] = nums[index];
      nums[index] = tmp;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    // 找排序后数组，与索引号没有相差1便是重复元素
    if (nums[i] != i + 1) {
      result.push(nums[i]);
    }
  }

  return result;
};
// @lc code=end
