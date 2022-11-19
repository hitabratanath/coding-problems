function combinationSum(A, i, S, arr, result) {
  if (i === arr.length) {
    if (S === 0) {
      result.push([...A]);
    }
    return;
  }
  combinationSum([...A, arr[i]], i + 1, S - arr[i], arr, result);
  combinationSum(A, i + 1, S, arr, result);
}

const arr = [1, 2, 3];
const K = 3;
let result = [];
combinationSum([], 0, K, arr, result);
console.log(result);
