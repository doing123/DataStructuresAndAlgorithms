/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  // 自动机类
  class Automaton {
    constructor() {
      this.state = 'start'; // 执行阶段，默认开始执行阶段
      this.sign = 1; // 默认 正号
      this.answer = 0;
      // 状态和执行阶段的对应表
      // [执行阶段, [空格, 正负, 数值, 其他]]
      this.map = new Map([
        ['start', ['start', 'signed', 'in_number', 'end']],
        ['signed', ['end', 'end', 'in_number', 'end']],
        ['in_number', ['end', 'end', 'in_number', 'end']],
        ['end', ['end', 'end', 'end', 'end']],
      ]);
    }

    // 获取状态的索引
    getIndex(char) {
      if (char == ' ') {
        return 0;
      } else if (char == '-' || char == '+') {
        return 1;
      } else if (typeof Number(char) == 'number' && !isNaN(char)) {
        return 2;
      } else {
        return 3;
      }
    }

    // 字符转换执行函数
    get(char) {
      // 每次传入字符时，都要变更自动机的执行阶段
      this.state = this.map.get(this.state)[this.getIndex(char)];

      if (this.state == 'in_number') {
        this.answer = this.answer * 10 + (char - 0);

        this.answer =
          this.sign == 1
            ? Math.min(this.answer, Math.pow(2, 31) - 1)
            : Math.min(this.answer, -Math.pow(-2, 31)); // 在负号为负数时，需要将INT_MIN变为正数
      } else if (this.state == 'signed') {
        this.sign = char == '+' ? 1 : -1;
      }
    }
  }

  // 生成自动机实例
  let automaton = new Automaton();

  // 遍历每个字符
  for (let char of str) {
    // 依次进行转换
    automaton.get(char);
  }

  // 返回值，整数 = 正负 * 数值
  return automaton.sign * automaton.answer;
};
// @lc code=end
