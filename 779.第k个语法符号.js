/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
  // 1.递归，满完全二叉树
  // 1：10，0：01，
  // 故 k 为偶数，由上一行的k/2生成且字符取反，
  // k 为奇数，由上一行的k+1/2生成且字符相同

  if (N === 1) return 0;
  let result;
  if (K % 2) {
    // 奇数
    result = kthGrammar(N - 1, parseInt((K + 1) / 2));
  } else {
    result = kthGrammar(N - 1, K / 2);
  }
  if (K % 2) {
    return result;
  } else {
    return result ? 0 : 1;
  }
};
// @lc code=end
