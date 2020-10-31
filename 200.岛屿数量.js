/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 4.并查集 另一种写法
  if (!grid.length || !grid[0].length) return 0;
  let row = grid.length;
  let col = grid[0].length;
  let x = [1, -1, 0, 0];
  let y = [0, 0, 1, -1];
  const dummy = row * col + 1;
  const uf = new UnionFind(dummy);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        for (let k = 0; k < 4; k++) {
          let m = i + x[k];
          let n = j + y[k];
          if (m >= 0 && m < row && n >= 0 && n < col && grid[m][n] === '1') {
            uf.union(i * col + j, m * col + n);
          }
        }
      } else if (grid[i][j] === '0') {
        uf.union(i * col + j, dummy);
      }
    }
  }

  return uf.getCount() - 1; // 返回并查集的个数减一
};

class UnionFind {
  // 构造一个节点数为 n 的集合
  constructor (n) {
    this.count = n;
    this.parent = new Array(n);
    this.size = new Array(n); // size数组记录着每棵树的重量
    for (let i = 0; i < n; i++) {
      this.parent[i] = i; // parent指向自身
      this.size[i] = 1;
    }
  }

  // 连通节点 p 和 q, p 和 q 都是索引
  union (p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    if (rootP === rootQ) return;
    // 小树接到大树下面，这样较平衡
    if (this.size[rootP] > this.size[rootQ]) {
      this.parent[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    } else {
      this.parent[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    }
    this.count--;
  }

  // 判断 p、q 是否连通
  isConnected (p, q) {
    return this.find(p) === this.find(q);
  }

  // 找到 x 节点的 root
  find (x) {
    while (this.parent[x] !== x) {
      // 进行路径压缩
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }

  // 返回节点数
  getCount () {
    return this.count;
  }
}
// @lc code=end
