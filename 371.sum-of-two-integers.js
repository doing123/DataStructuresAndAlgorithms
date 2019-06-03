/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// https://www.jianshu.com/p/9235a7980934
var getSum = function (a, b) {
  if (b === 0) return a
  const sum = a ^ b
  const carry = (a & b) << 1

  return getSum(sum, carry)
};

