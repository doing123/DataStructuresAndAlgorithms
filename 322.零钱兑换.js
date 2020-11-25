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
  // 2.带备忘录的递归
  let memory = [];

  return dp(amount);

  function dp (n) {
    if (memory[n]) return memory[n];

    if (n === 0) return 0;
    if (n < 0) return -1;
    let res = Number.MAX_SAFE_INTEGER;

    for (const coin of coins) {
      let sub = dp(n - coin);
      if (sub === -1) continue;
      res = Math.min(res, sub + 1);
    }

    // 记入备忘录
    memory[n] = res === Number.MAX_SAFE_INTEGER ? -1 : res;
    return memory[n];
  }
};
// @lc code=end
