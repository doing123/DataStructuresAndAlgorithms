/*
 * @lc app=leetcode id=754 lang=javascript
 *
 * [754] Reach a Number
 */
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  // TODO:
  // 1.求和公式快速定位 n
  /* target = Math.abs(target)
  // 求出第n步，使得从1累加到n刚好大于等于 target，利用求和公式 ???
  let n = Math.ceil((-1 + Math.sqrt(1 + 8 * target)) / 2)
  let sum = n * (n + 1) / 2
  if (sum === target) return n
  let res = sum - target
  if ((res & 1) === 0) return n // 差值为偶数
  return n + ((n & 1) ? 2 : 1) // 如果是奇数，判断此时n的奇偶，如果n是奇数，则返回 n+2，若n是偶数，返回 n+1
   */

  // 2.累加
  target = Math.abs(target)
  let res = 0
  let sum = 0
  while (sum < target || (sum - target) % 2 === 1) {
    res++
    sum += res
  }
  return res
}
