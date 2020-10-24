/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  // 遍历
  let result = new Array(num + 1).fill(0);
  for (let i = 0; i <= num; i++) {
    let item = i.toString(2);
    for (let j = 0; j < item.length; j++) {
      if (item[j] === '1') result[i]++;
    }
  }
  return result;
};
// @lc code=end
