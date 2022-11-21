function NSR(arr) {
  let result = [],
    stk = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (stk.length === 0) {
      result.push(-1);
      stk.push(arr[i]);
    } else if (stk[stk.length - 1] < arr[i]) {
      result.push(stk[stk.length - 1]);
      stk.push(arr[i]);
    } else {
      while (stk[stk.length - 1] > arr[i]) stk.pop();
      if (stk.length === 0) result.push(-1);
      else result.push(stk[stk.length - 1]);
      stk.push(arr[i]);
    }
  }
  return result.reverse();
}
const arr = [4, 5, 2, 10, 8];
console.log(NSR(arr));
