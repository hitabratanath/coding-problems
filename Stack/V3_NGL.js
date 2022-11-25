// the only change is the outermost loop and reverse array
function NGL(arr) {
  let stk = [],
    result = [];

  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      result.push(-1);
    } else if (stk[stk.length - 1] > arr[i]) {
      result.push(stk[stk.length - 1]);
      stk.push(arr[i]);
    } else {
      while (stk.length !== 0 && stk[stk.length - 1] < arr[i]) {
        stk.pop();
      }
      if (stk.length === 0) {
        result.push(-1);
        stk.push(arr[i]);
      } else {
        result.push(stk[stk.length - 1]);
        stk.push(arr[i]);
      }
    }
  }
  return result;
}
const arr = [1, 3, 2, 4];
console.log(NGL(arr));
