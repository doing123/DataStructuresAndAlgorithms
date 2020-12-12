/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  // 1.BFS
  let visited = new Set(); // 记录已经穷举过的密码，防止走回头路
  let queue = [];
  let step = 0;
  queue.push('0000'); // 从起点开始启动广度优先搜索
  visited.add('0000');

  while (queue.length) {
    let len = queue.length;
    // 将当前队列中的所有节点向四周扩散
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      // 判断是否到达终点
      if (deadends.includes(node)) continue;
      if (node === target) return step;

      // 将一个节点的未遍历相邻节点加入队列
      for (let j = 0; j < 4; j++) {
        let up = plusOne(node, j); // 该位置向上拨动一次
        if (!visited.has(up)) {
          queue.push(up);
          visited.add(up);
        }

        let down = minusOne(node, j); // 向下拨动一次
        if (!visited.has(down)) {
          queue.push(down);
          visited.add(down);
        }
      }
    }
    step++;
  }

  return -1; // 穷举完成都没有找到目标密码，即找不到

  function plusOne (str, i) {
    if (str[i] === '9') {
      str = str.substring(0, i) + '0' + str.substring(i + 1);
    } else {
      str = str.substring(0, i) + (+str[i] + 1) + str.substring(i + 1);
    }
    return str;
  }

  function minusOne (str, i) {
    if (str[i] === '0') {
      str = str.substring(0, i) + '9' + str.substring(i + 1);
    } else {
      str = str.substring(0, i) + (+str[i] - 1) + str.substring(i + 1);
    }
    return str;
  }
};
// @lc code=end
