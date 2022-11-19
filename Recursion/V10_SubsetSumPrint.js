function subsetSum(N, arr) {
  let result = [];
  backtracking([], 0, N, arr, result);
  return result;
}
function backtracking(A, i, N, arr, result) {
  if (i === N) {
    let sum = A.reduce((a, b) => a + b, 0);
    result.push([...A]);
    return;
  }
  backtracking([...A, arr[i]], i + 1, N, arr, result);
  backtracking(A, i + 1, N, arr, result);
}

let arr = [1, 2, 2];
let result = subsetSum(arr.length, arr);
let myset = new Set(result);
console.log(Array.from(myset).sort());
