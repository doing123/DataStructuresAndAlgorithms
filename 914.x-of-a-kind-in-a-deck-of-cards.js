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
  /* if (deck.length < 2) return false
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

  return true */

  // 2.
  /* if (deck.length < 2) {
    return false
  }
  const map = new Map()
  deck.forEach(item => {
    map.set(item, (map.get(item) | 0) + 1)
  })

  let min = 10001
  for (let val of map.values()) {
    min = Math.min(min, val)
  }

  if (min === 1) return false

  for (let val of map.values()) {
    if (getGCD(min, val) === 1) return false
  }

  return true */

  // 3.
  /* const count = [] // 空出来的 key 对应的 value 会是 undefined
  deck.forEach(item => {
    if (count[item] === undefined) count[item] = 1
    else count[item]++
  })

  let tmp = -1
  for (let i = 0; i < count.length; i++) {
    if (count[i] === undefined) continue
    if (count[i] < 2) return false
    if (tmp === -1) {
      tmp = count[i]
    } else {
      if (getGCD(tmp, count[i]) === 1) return false
    }
  }

  return true */

  // 4.
  let obj = {}
  deck.forEach(item => {
    if (obj[item] === undefined) obj[item] = 1
    else obj[item]++
  })

  let tmp = obj[deck[0]]

  for (let key in obj) {
    if (obj[key] > 0) {
      tmp = gcd(tmp, obj[key])
    }
  }

  return tmp > 1
}

function getGCD (a, b) {
  let gcd = 1
  for (let i = 1; i <= a || i <= b; i++) {
    if (a % i === 0 && b % i === 0) gcd = i
  }

  return gcd
}

// TODO:利用递归求最大公约数
function gcd (a, b) {
  return a === 0 ? b : gcd(b % a, a)
}
