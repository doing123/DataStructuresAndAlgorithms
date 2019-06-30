/*
 * @lc app=leetcode id=926 lang=javascript
 *
 * [926] Flip String to Monotone Increasing
 */
/**
 * @param {string} S
 * @return {number}
 */
var minFlipsMonoIncr = function (S) {
  let len = S.length
  let leftZero = 0
  let rightOne = 0
  // 统计字符串中有多少个1，多少个0
  for (let i = 0; i < len; i++) {
    if (S[i] === '1') {
      rightOne++
    }
  }

  let minChange = len - rightOne
  // 遍历，计算如果间隔点在这个位置，左边需要改变几个1->0，右边需要改变几个0->1，获得其中最小的改变点
  for (let i = 0; i < len; i++) {
    if (S[i] === '0') {
      leftZero++
    } else {
      rightOne--
    }
    // len - rightOne - leftZero
    // 这里不好理解，改为 总长度 - （该间隔点之前已有0的个数 + 该间隔点之后已有1的个数），如下
    // 假设该间隔点之前的长度为 leftLen, 则左边需要改变几个1->0：leftLen - leftZero
    // 假设该间隔点之后的长度为 rightLen, 则左右边需要改变几个0->1：rightLen - rightOne
    // 即为 减去 左边需要改变几个1->0的个数和右边需要改变几个0->1个数之和
    let tmp = len - (rightOne + leftZero)
    minChange = Math.min(minChange, tmp)
  }

  return minChange
}
