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
  const res = []

  for (let i = 0; i < s.length - 1; i++) {
    const sub = match(s.slice(i))
    if (sub) {
      res.push(sub)
    }
  }

  return res.length
};

function match(str) {
  const j = str.match(/^(0+|1+)/)[0]
  const o = (j[0] ^ 1).toString().repeat(j.length)
  const reg = new RegExp(`^${j}${o}`)
  if (reg.test(str)) {
    return RegExp.$1
  } else {
    return ''
  }
}

