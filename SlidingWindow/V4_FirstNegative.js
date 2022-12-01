function firstNegative(arr, k) {
  let que = [],
    i = 0,
    j = 0,
    result = [];
  while (j < arr.length) {
    if (arr[j] < 0) que.push(arr[j]);
    if (j - i + 1 < k) j++;
    else {
      result.push(que[0] || 0);
      if (que[0] === arr[i]) que.shift();
      i++;
      j++;
    }
  }
  return result;
}
const arr = [-8, 2, 3, -6, 10];
const k = 2;
console.log(firstNegative(arr, k));
