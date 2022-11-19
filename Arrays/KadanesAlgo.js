function fun(arr) {
  const n = arr.length;
  let currentSum = 0,
    maxSum = 0;
  for (let i = 0; i < n; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) maxSum = currentSum;
    if (currentSum < 0) currentSum = 0;
  }
  return maxSum;
}
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(fun(arr));
