function NGL(arr) {
  let stk = [],
    result = [],
    resultLen = [];
  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      result.push(-1);
      stk.push(i);
    } else if (arr[i] < arr[stk[stk.length - 1]]) {
      result.push(stk[stk.length - 1]);
      stk.push(i);
    } else {
      while (arr[stk[stk.length - 1]] < arr[i]) stk.pop();
      if (stk.length === 0) result.push(-1);
      else result.push(stk[stk.length - 1]);
      stk.push(i);
    }
  }
  for (let i = 0; i < result.length; i++) {
    resultLen[i] = i - result[i];
  }
  return resultLen;
}
const arr = [100, 80, 60, 70, 60, 75, 85];
console.log(arr);
console.log(NGL(arr));
