function subsetSumRec(arr, n, sum) {
  if ((n === 0 && sum === 0) || sum === 0) return true;
  if (n === 0) return false;
  else if (arr[n - 1] <= sum) {
    let include = subsetSumRec(arr, n - 1, sum - arr[n - 1]);
    let exclude = subsetSumRec(arr, n - 1, sum);
    return include || exclude;
  } else return subsetSumRec(arr, n - 1, sum);
}
// -------------------------------------------------------------------------------------------
function subsetSumMemo(arr, n, sum, memo = {}) {
  if ((n === 0 && sum === 0) || sum === 0) return true;
  if (n === 0) return false;
  let key = n + ' ' + sum;
  if (key in memo) return memo[key];
  else if (arr[n - 1] <= sum) {
    let include = subsetSumMemo(arr, n - 1, sum - arr[n - 1], memo);
    let exclude = subsetSumMemo(arr, n - 1, sum, memo);
    memo[key] = include || exclude;
    return memo[key];
  } else {
    memo[key] = subsetSumMemo(arr, n - 1, sum, memo);
    return memo[key];
  }
}
// -------------------------------------------------------------------------------------------
function subsetSumTD(arr, n, sum) {
  let t = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) t[i] = new Array(sum + 1);

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (j === 0) t[i][j] = true;
      else if (i === 0) t[i][j] = false;
      else if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j - arr[i - 1]] || t[i - 1][j];
      } else t[i][j] = t[i - 1][j];
    }
  }
  return t[n][sum];
}
// -------------------------------------------------------------------------------------------
const st = [2, 3, 7, 8, 10],
  sum = 11;
console.log(subsetSumRec(st, st.length, sum));
console.log(subsetSumMemo(st, st.length, sum));
console.log(subsetSumTD(st, st.length, sum));
