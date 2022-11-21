function NSL(arr) {
  let result = [],
    stk = [];
  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      result.push(-1);
      stk.push(arr[i]);
    } else if (stk[stk.length - 1] < arr[i]) {
      result.push(stk[stk.length - 1]);
      stk.push(arr[i]);
    } else {
      while (stk[stk.length - 1] > arr[i]) {
        stk.pop();
      }
      if (stk.length === 0) {
        result.push(-1);
      } else {
        result.push(stk[stk.length - 1]);
      }
      stk.push(arr[i]);
    }
  }
  return result;
}
const arr = [1, 3, 0, 2, 5];
console.log(NSL(arr));
