// this question is same as that of the previous question by you just need to add repo in the funciton to memoise the answer

function knapsack(wt, val, n, W, repo = {}) {
  if (n === 0 || W === 0) return 0;
  let key = n + ' ' + W;
  if (key in repo) return repo[key];
  else if (wt[n - 1] <= W) {
    let include = val[n - 1] + knapsack(wt, val, n - 1, W - wt[n - 1], repo);
    let exclude = knapsack(wt, val, n - 1, W, repo);
    repo[key] = Math.max(include, exclude);
    return repo[key];
  } else {
    repo[key] = knapsack(wt, val, n - 1, W, repo);
    return repo[key];
  }
}
let val = [60, 100, 120];
let wt = [10, 20, 30];
let W = 50;
console.log(knapsack(wt, val, wt.length, W));
