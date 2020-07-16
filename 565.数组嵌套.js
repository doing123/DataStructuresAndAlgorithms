/*
 * @lc app=leetcode.cn id=565 lang=javascript
 *
 * [565] 数组嵌套
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  // 1.使用 set 提交不通过
  // let max = 0;
  // for (let i = 0, len = nums.length; i < len; i++) {
  //   let set = new Set();
  //   let tmp = nums[i];
  //   while (tmp !== undefined && !set.has(tmp)) {
  //     set.add(tmp);
  //     tmp = nums[tmp];
  //   }
  //   let tmpArr = [...set];
  //   if (max < tmpArr.length) {
  //     max = tmpArr.length;
  //   }
  // }
  // return max;

  // 2.找环的最大长度
  let max = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    let count = 0;
    let start = i;
    // 因为任何两个元素不可能到达同一个元素，所以任何两个环不可能有相同元素、即不相交。
   // 任何访问过的元素在原数组中标记一下，即可避免重复遍历已经遍历过的环
    while (nums[start] != Infinity) {
      count++;
      let tmp = start;
      start = nums[start];
      nums[tmp] = Infinity;
    }
    if (count > max) {
      max = count;
    }
  }
  return max;
};
// @lc code=end
