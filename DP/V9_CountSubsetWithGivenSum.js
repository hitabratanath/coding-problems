function countSubsetRec(arr, n, sum) {
  if (sum === 0 || (sum === 0 && n === 0)) return 1;
  if (n === 0) return 0;
  else if (arr[n - 1] <= sum) {
    let include = countSubsetRec(arr, n - 1, sum - arr[n - 1]);
    let exclude = countSubsetRec(arr, n - 1, sum);
    return include + exclude;
  } else return countSubsetRec(arr, n - 1, sum);
}
// -----------------------------------------------------------------------------------
function countSubsetMemo(arr, n, sum, memo = {}) {
  if (sum === 0 || (sum === 0 && n === 0)) return 1;
  if (n === 0) return 0;
  let key = n + ' ' + sum;
  if (key in memo) return memo[key];
  else if (arr[n - 1] <= sum) {
    let include = countSubsetMemo(arr, n - 1, sum - arr[n - 1], memo);
    let exclude = countSubsetMemo(arr, n - 1, sum, memo);
    memo[key] = include + exclude;
    return memo[key];
  } else return countSubsetMemo(arr, n - 1, sum, memo);
}
// -----------------------------------------------------------------------------------

function countSubsetTD(arr, n, sum) {
  let t = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) t[i] = new Array(sum + 1);

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < sum + 1; j++) {
      if (j === 0) t[i][j] = 1;
      else if (i === 0) t[i][j] = 0;
      else if (arr[i - 1] <= j) {
        t[i][j] = t[i - 1][j - arr[i - 1]] + t[i - 1][j];
      } else t[i][j] = t[i - 1][j];
    }
  }
  return t[n][sum];
}
// -----------------------------------------------------------------------------------

const st = [1, 3, 7, 8, 10],
  sum = 11;
console.log(countSubsetRec(st, st.length, sum));
console.log(countSubsetMemo(st, st.length, sum));
console.log(countSubsetTD(st, st.length, sum));
