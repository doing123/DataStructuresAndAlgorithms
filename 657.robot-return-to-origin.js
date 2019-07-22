/*
 * @lc app=leetcode id=657 lang=javascript
 *
 * [657] Robot Return to Origin
 */
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  // 1.上下左右四个方向
  /* let obj = {
    'L': 0,
    'R': 0,
    'D': 0,
    'U': 0
  }
  for (let i = 0, len = moves.length; i < len; i++) {
    obj[moves[i]]++
  }
  return obj['L'] === obj['R'] && obj['U'] === obj['D'] */

  // 2.水平和垂直方向
  let hDirection = 0 // horizontal direction
  let vDirection = 0 // vertical direction
  for (let i = 0, len = moves.length; i < len; i++) {
    switch (moves.charAt(i)) {
      case 'U':
        vDirection++
        break
      case 'D':
        vDirection--
        break
      case 'L':
        hDirection--
        break
      default:
        hDirection++
        break
    }
  }

  return vDirection === 0 && hDirection === 0
}
