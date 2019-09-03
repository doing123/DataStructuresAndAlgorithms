/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // TODO:
  // 动态规划
  if (nums.length < 2) {
    return nums.length === 0 ? 0 : nums[0]
  }
  // a 是上次的最大收益
  let a = nums[0]
  // b 是当前的最大收益
  let b = Math.max(a, nums[1])
  for (let i = 2; i < nums.length; i++) {
    let tmp = b

    // 最优解递归公式：当前的最大收益是两种选择里最大的那个

    // 在这次一定偷第i家店铺和这次不偷第i家店中取最大
    // 一定偷第i家店=偷i-2家店时的最优解+偷这家店的价值（一定包含当前解的局部最优）
    // 不偷第i家店=偷上家店的价值（历史最优）
    b = Math.max(a + nums[i], b)
    a = tmp
  }

  return b
}
