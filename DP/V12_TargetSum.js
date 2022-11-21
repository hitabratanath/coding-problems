function findTargetSumWays(arr, target) {
  let result = 0;
  let n = arr.length;
  function dfs(n, target) {
    if (target === 0 && n === 0) {
      result++;
      return;
    }
    if (n < 0) return;

    dfs(n - 1, target + arr[n - 1]);
    dfs(n - 1, target - arr[n - 1]);
  }
  dfs(n, target);
  return result;
}
let nums = [
    47, 23, 35, 27, 30, 42, 26, 42, 30, 6, 8, 48, 44, 38, 41, 50, 18, 19, 19, 5,
  ],
  target = 40;
console.log(findTargetSumWays(nums, target));
