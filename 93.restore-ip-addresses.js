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
  let result = []
  let recursive = (arr, str) => {
    if (arr.length === 4 && arr.join('') === s) {
      result.push(arr.join('.'))
    } else {
      for (let i = 0, len = Math.min(3, str.length); i < len; i++) {
        let tmp = str.substr(0, i + 1)
        if (tmp < 256) {
          recursive(arr.concat([tmp]), str.substr(i + 1))
        }
      }
    }
  }

  recursive([], s)
  return result
}
