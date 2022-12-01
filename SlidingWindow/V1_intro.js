function maxSum(arr, k) {
  let msum = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    let tempSum = 0;
    for (let j = i; j < i + k; j++) {
      tempSum += arr[j];
    }
    msum = tempSum > msum ? tempSum : msum;
  }
  return msum;
}

function maxSumOptimized(arr, k) {
  let msum = 0,
    tempsum = 0;
  for (let i = 0; i < k; i++) tempsum += arr[i];
  msum = tempsum;
  for (let i = 1; i <= arr.length - k; i++) {
    tempsum = tempsum + arr[i + k - 1] - arr[i - 1];
    msum = tempsum > msum ? tempsum : msum;
  }
  return msum;
}
function slidingWindowAlternate(arr, k) {
  let maxSum = 0,
    i = 0,
    j = 0,
    sum = 0;
  while (j < arr.length) {
    sum += arr[j];
    if (j - i + 1 === k) {
      maxSum = Math.max(sum, maxSum);
      sum = sum - arr[i];
      i++;
      j++;
    } else {
      j++;
    }
  }
  return maxSum;
}

const arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
const k = 4;
console.log(maxSum(arr, k));
console.log(maxSumOptimized(arr, k));
console.log(slidingWindowAlternate(arr, k));
