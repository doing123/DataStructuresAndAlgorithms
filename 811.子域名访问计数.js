/*
 * @lc app=leetcode.cn id=811 lang=javascript
 *
 * [811] 子域名访问计数
 */

// @lc code=start
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  let result = [];
  let map = {};
  for (let item of cpdomains) {
    let [count, str] = item.split(' ');
    map[str] = map[str] ? map[str] + +count : +count;
    let index = str.indexOf('.');
    while (index > -1) {
      str = str.substring(index + 1);
      map[str] = map[str] ? map[str] + +count : +count;
      index = str.indexOf('.');
    }
  }
  for (let key in map) {
    result.push(`${map[key]} ${key}`);
  }
  return result;
};
// @lc code=end
