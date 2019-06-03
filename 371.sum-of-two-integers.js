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
var getSum = function (a, b) {
  if (b === 0) return a
  const sum = a ^ b
  const carry = (a & b) << 1
  return getSum(sum, carry)
};

