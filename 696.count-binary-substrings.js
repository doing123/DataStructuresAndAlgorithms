/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 */
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  // TODO: RegExp too big
  /* const res = []

  for (let i = 0; i < s.length - 1; i++) {
    const sub = match(s.slice(i))
    if (sub) {
      res.push(sub)
    }
  }

  return res.length */

  /* let zeros = 0
  let ones = 0
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (i == 0) {
      (s[i] == '1') ? ones++ : zeros++
    } else {
      if (s[i] == '1') {
        ones = (s[i - 1] == '1') ? ones + 1 : 1
        if (zeros >= ones) res++
      } else if (s[i] == '0') {
        zeros = (s[i - 1] == '0') ? zeros + 1 : 1
        if (ones >= zeros) res++
      }
    }
  }

  return res */

  let res = 0
  let pre = 0
  let cur = 1
  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) cur++
    else {
      pre = cur
      cur = 1
    }
    if (pre >= cur) res++
  }

  return res
}

/* function match(str) {
  const j = str.match(/^(0+|1+)/)[0]
  const o = (j[0] ^ 1).toString().repeat(j.length)
  const reg = new RegExp(`^(${j}${o})`)
  if (reg.test(str)) {
    return RegExp.$1
  } else {
    return ''
  }
} */
