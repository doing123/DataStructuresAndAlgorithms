/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  // 2.并查集
  let row = board.length;
  if (!row) return;
  let col = board[0].length;
  // 留一个额外的位置 dummy 作为不需要替换的 O 的公共父节点
  let uf = new UF(row * col + 1);
  let dummy = row * col;

  // 将首尾列的 O 与 dummy 连通
  for (let i = 0; i < row; i++) {
    if (board[i][0] === 'O') {
      uf.union(i * col, dummy);
    }
    if (board[i][col - 1] === 'O') {
      uf.union(i * col + col - 1, dummy);
    }
  }

  // 将首尾行的 O 与 dummy 连通
  for (let i = 0; i < col; i++) {
    if (board[0][i] === 'O') {
      uf.union(i, dummy);
    }
    if (board[row - 1][i] === 'O') {
      uf.union((row - 1) * col + i, dummy);
    }
  }

  // 方向数组 d 是上下左右搜索的常用手法
  let direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];
  for (let i = 1; i < row - 1; i++) {
    for (let j = 1; j < col - 1; j++) {
      if (board[i][j] === 'O') {
        // 将此 O 与上下左右的 O 连通
        for (let k = 0; k < 4; k++) {
          let x = i + direction[k][0];
          let y = j + direction[k][1];
          if (board[x][y] === 'O') {
            uf.union(x * col + y, i * col + j);
          }
        }
      }
    }
  }

  // 所有不和 dummy 连通的 O，都要被替换
  for (let i = 1; i < row - 1; i++) {
    for (let j = 1; j < col - 1; j++) {
      if (!uf.connected(dummy, i * col + j)) {
        board[i][j] = 'X';
      }
    }
  }
};

class UF {
  constructor (n) {
    this.count = n;
    this.parent = Array.from({ length: n }, (item, index) => index); // 根节点指向自身
    this.size = new Array(n);
  }

  // 将 p 和 q 连通
  union (p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);

    if (rootP === rootQ) return;
    this.parent[rootP] = rootQ;

    this.count--;
  }

  // 判断 p 和 q 是否互相连通
  connected (p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    return rootP === rootQ;
  }

  // 返回节点 x 的根节点
  find (x) {
    while (this.parent[x] !== x) {
      x = this.parent[x];
    }
    return x;
  }

  count () {
    return this.count;
  }
}
// @lc code=end
