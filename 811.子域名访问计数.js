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
      var subStr = str.substring(index + 1);
      map[subStr] = map[subStr] ? map[subStr] + +count : +count;
      index = str.indexOf('.', index + 1);
    }
  }
  for (let key in map) {
    result.push(`${map[key]} ${key}`);
  }
  return result;
};
// @lc code=end
