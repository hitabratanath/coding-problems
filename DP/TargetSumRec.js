function targetSum(arr, target) {
  let n = arr.length;
  let t = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) t[i] = new Array(target + 1);

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < target + 1; j++) {
      if (i === 0) t[i][j] = 1;
      else if (j === 0) t[i][j] = 0;
      else if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j - arr[i - 1]] + t[i - 1][j];
      } else t[i][j] = t[i - 1][j];
    }
  }
  return t[n][target];
}
const arr = [1, 1, 2, 3],
  target = 1;
console.log(targetSum(arr, target));



