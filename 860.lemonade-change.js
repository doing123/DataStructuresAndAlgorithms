/*
 * @lc app=leetcode id=860 lang=javascript
 *
 * [860] Lemonade Change
 */
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // TODO:待优化
  // 钱箱，存储零钱
  let hand = []
  while (bills.length) {
    let money = bills.shift()
    if (money === 5) {
      hand.push(money)
    } else {
      // 手里的零钱降序排列，即最大的面值的钱放在最前面
      hand.sort((a, b) => b - a)
      // 顾客的钱减去饮料的钱就是需要找给顾客的零钱
      let change = money - 5
      // for (let i = 0, len = hand.length; i < len; i++) { // hand.length 会动态改变
      for (let i = 0; i < hand.length; i++) { // hand.length 会动态改变
        if (hand[i] <= change) {
          change -= hand[i]
          hand.splice(i, 1)
          // 删除了元素，数组的长度发生了变化，要维持刚才的 i 不变
          i--
        }
        if (change === 0) {
          break
        }
      }
      // 如果没有足够的零钱找给顾客
      if (change !== 0) {
        return false
      } else {
        hand.push(money)
      }
    }
  }
  return true
}

// lemonadeChange([5, 5, 5, 10, 50])
