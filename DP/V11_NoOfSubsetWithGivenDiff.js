// the problem is very similar to V9, you just need to use below eq.
// S1 + S2 = T
// S1 - S2 = D
// 2S1 = T + D => S1 = (T + D) / 2
// then supply S1 instead of D
function fun(i, S, arr) {
  if (S === 0) return 1;
  if (i < 0) return 0;

  if (arr[i] <= S) {
    let include = fun(i - 1, S - arr[i], arr);
    let exclude = fun(i - 1, S, arr);
    return include + exclude;
  } else return fun(i - 1, S, arr);
}
const arr = [1, 3, 7, 8, 10];
const S = 11;
console.log(fun(arr.length - 1, S, arr));
