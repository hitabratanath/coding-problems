function subsetSum(N, arr) {
  let myset = new Set();
  backtracking([], 0, N, arr, myset);
  return myset;
}
function backtracking(A, i, N, arr, myset) {
  if (i === N) {
    let key = JSON.stringify(A);
    if (!myset.has(key)) myset.add(A);
    return;
  }
  backtracking([...A, arr[i]], i + 1, N, arr, myset);
  backtracking(A, i + 1, N, arr, myset);
}

let arr = [1, 2, 2];
let result = subsetSum(arr.length, arr);
console.log(result);
