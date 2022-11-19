// this is a popular pattern on take/ not take or rather decison based on choice
function fun(A, i) {
  if (i >= arr.length) {
    console.log(A.join(''));
    return;
  }
  A.push(arr[i]);
  fun(A, i + 1);
  A.pop();
  fun(A, i + 1);
}
const arr = ['a', 'b', 'c'];
fun([], 0);
