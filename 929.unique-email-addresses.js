/*
 * @lc app=leetcode id=929 lang=javascript
 *
 * [929] Unique Email Addresses
 */
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let result = []
  for (let i = 0; i < emails.length; i++) {
    let arr = emails[i].split('@')
    arr[0] = arr[0].replace(/\./g, '')
    if (arr[0].includes('+')) {
      arr[0] = arr[0].split('+')[0]
    }
    let tmp = arr[0] + '@' + arr[1]
    if (!result.includes(tmp)) {
      result.push(tmp)
    }
  }

  return result.length
}

// numUniqueEmails(['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com'])
