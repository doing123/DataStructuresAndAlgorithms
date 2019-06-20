/*
 * @lc app=leetcode id=914 lang=javascript
 *
 * [914] X of a Kind in a Deck of Cards
 */
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  // 1.判断map中每队数据的最大公约数是不是等于1
  if (deck.length < 2) return false
  const map = new Map()
  deck.forEach(item => {
    map.set(item, (map.get(item) | 0) + 1)
  })

  let count = 0
  for (let val of map.values()) {
    if (val < 2) {
      return false
    }
    if (count === 0) {
      count = val
    } else {
      if (count !== val) {
        let gcd = 1
        for (let i = 1; i <= count || i <= val; i++) {
          if (count % i === 0 && val % i === 0) {
            gcd = i
          }
        }
        if (gcd === 1) return false
      }
    }
  }

  return true
}
