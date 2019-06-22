/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length > 12) return []
  let result = []
  let recursive = (arr, str) => {
    if (arr.length === 4 && arr.join('') === s) {
      result.push(arr.join('.'))
    } else {
      for (let i = 0, len = Math.min(3, str.length); i < len; i++) {
        let tmp = str.substr(0, i + 1)
        // 当只有一位时，0可以成某一段，如果有两位或三位时，像 00， 01， 001， 011， 000等都是不合法的
        if (tmp.length > 1 && tmp[0] === '0') { // '0'
          continue
        }
        if (tmp < 256) {
          recursive(arr.concat([tmp]), str.substr(i + 1))
        }
      }
    }
  }

  recursive([], s)
  return result
}
