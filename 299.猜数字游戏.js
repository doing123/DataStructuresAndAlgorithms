/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let aCount = 0;
  let bCount = 0;
  let s = secret.split('');
  let g = guess.split('');
  for (let i = 0; i < s.length; i++) {
    // xA 表示有 x 位数字出现在秘密数字中，且位置都与秘密数字一致。
    if (s[i] == g[i]) {
      aCount++;
      s[i] = g[i] = 'A';
    }
  }
  for (let i = 0; i < s.length; i++) {
    let index = g.indexOf(s[i]);
    // yB 表示有 y 位数字出现在秘密数字中，但位置与秘密数字不一致。
    if (s[i] != 'A' && index > -1) {
      // 被母牛匹配到，避免重复匹配
      bCount++;
      g[index] = 'B';
    }
  }
  return `${aCount}A${bCount}B`;
};
// @lc code=end
