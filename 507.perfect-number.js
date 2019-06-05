/*
 * @lc app=leetcode id=507 lang=javascript
 *
 * [507] Perfect Number
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let sum = 1
  for (let i = 2;i * i < num;i++) {
    if (num % i == 0) {
      sum += i + (num / i == i ? 0 : num / i)
    }
  }

  return num != 1 && sum == num
};

