/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  // 2.摩尔投票法
  // 如果至多选m个代表，那他们的票数至少要超过⌊ 1/(m+1) ⌋的票数。
  let res = [];
  let len = nums.length;
  if (len == 0) return [];

  // 初始化两个候选人，及他们的计票
  let cand1 = nums[0],
    count1 = 0;
  let cand2 = nums[0],
    count2 = 0;

  // 配对阶段
  for (let i = 0; i < len; i++) {
    let curr = nums[i];
    if (cand1 == curr) {
      // 投票
      count1++;
      continue;
    }
    if (cand2 == curr) {
      count2++;
      continue;
    }

    if (count1 == 0) {
      cand1 = curr;
      count1++;
      continue;
    }
    if (count2 == 0) {
      cand2 = curr;
      count2++;
      continue;
    }
    count1--;
    count2--;
  }

  // 计数阶段
  count1 = 0;
  count2 = 0;
  for (let i = 0; i < len; i++) {
    let curr = nums[i];
    if (cand1 == curr) count1++;
    else if (cand2 == curr) count2++;
  }

  if (count1 > nums.length / 3) res.push(cand1);
  if (count2 > nums.length / 3) res.push(cand2);

  return res;
};
// @lc code=end
