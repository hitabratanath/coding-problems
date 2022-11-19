function equalSumPartRec(arr, n, sum) {
  if ((n === 0 && sum === 0) || sum === 0) return true;
  if (n === 0) return false;
  else if (arr[n - 1] <= sum) {
    let include = equalSumPartRec(arr, n - 1, sum - arr[n - 1]);
    let exclude = equalSumPartRec(arr, n - 1, sum);
    return include || exclude;
  } else return equalSumPartRec(arr, n - 1, sum);
}
// -------------------------------------------------------------------------------------------
function equalSumPartMemo(arr, n, sum, memo = {}) {
  if ((n === 0 && sum === 0) || sum === 0) return true;
  if (n === 0) return false;
  let key = n + ' ' + sum;
  if (key in memo) return memo[key];
  else if (arr[n - 1] <= sum) {
    let include = equalSumPartMemo(arr, n - 1, sum - arr[n - 1], memo);
    let exclude = equalSumPartMemo(arr, n - 1, sum, memo);
    memo[key] = include || exclude;
    return memo[key];
  } else {
    memo[key] = equalSumPartMemo(arr, n - 1, sum, memo);
    return memo[key];
  }
}
// -------------------------------------------------------------------------------------------
function equalSumPartTD(arr, n, sum) {
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
const st = [1, 5, 11, 9];
const total = st.reduce((a, b) => a + b); // if the total is odd then we can say that we cannot divide the subarray in two equal parts and straight away we can return false
if (total % 2 !== 0) console.log(false);
else {
  console.log(equalSumPartRec(st, st.length, ~~(total / 2)));
  console.log(equalSumPartMemo(st, st.length, ~~(total / 2)));
  console.log(equalSumPartTD(st, st.length, ~~(total / 2)));
}
