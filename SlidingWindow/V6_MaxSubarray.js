// THIS IS A TYPICAL EXAMPLE OF MONOTONIC DEQUE
function maxSlidingWindow(arr, k) {
  let result = [],
    i = 0,
    j = 0,
    temp = [];
  while (j < arr.length) {
    if (temp.length === 0) temp.push(arr[j]);
    else if (arr[j] > temp[temp.length - 1]) {
      while (temp.length !== 0 && temp[temp.length - 1] < arr[j]) temp.pop();
      temp.push(arr[j]);
    } else temp.push(arr[j]);

    if (j - i + 1 < k) {
      j++;
    } else {
      result.push(temp[0]);
      if (arr[i] === temp[0]) temp.shift();
      i++;
      j++;
    }
  }
  return result;
}
const nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(nums, k));
