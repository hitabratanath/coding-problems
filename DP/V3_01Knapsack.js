// this is a plain 01 knapsack with recursive approach as taught in video no. 3 by aditya verma.
// here you need to find maximum profit with the given capacity and wt and val array
// here you will see how you made decision based on some choices
function knapsackRecursive(wt, val, n, W) {
  if (n === 0 || W === 0) return 0;
  if (wt[n - 1] <= W) {
    let include = val[n - 1] + knapsackRecursive(wt, val, n - 1, W - wt[n - 1]);
    let exclude = knapsackRecursive(wt, val, n - 1, W);
    return Math.max(include, exclude);
  }
  return knapsackRecursive(wt, val, n - 1, W);
}
let val = [60, 100, 120];
let wt = [10, 20, 30];
let W = 50;
console.log(knapsackRecursive(wt, val, wt.length, W));
