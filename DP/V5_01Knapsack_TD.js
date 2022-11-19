function knapsack(wt, val, n, W) {
  let t = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) t[i] = new Array(W + 1);

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < W + 1; j++) {
      if (i === 0 || j === 0) t[i][j] = 0;
      else if (wt[i - 1] <= j) {
        t[i][j] = Math.max(val[i - 1] + t[i - 1][j - wt[i - 1]], t[i - 1][j]);
      } else t[i][j] = t[i - 1][j];
    }
  }
  return t[n][W];
}
let val = [60, 100, 120];
let wt = [10, 20, 30];
let W = 50;
console.log(knapsack(wt, val, wt.length, W));
