/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // 1.暴力递归：TODO 超出时间限制
  return dp(amount);

  function dp (n) {
    if (n === 0) return 0;
    if (n < 0) return -1;

    // 最小值
    let res = Number.MAX_SAFE_INTEGER;
    for (const coin of coins) {
      let sub = dp(n - coin);
      if (sub === -1) continue;
      res = Math.min(res, 1 + sub);
    }
    return res === Number.MAX_SAFE_INTEGER ? -1 : res;
  }
};
// @lc code=end
