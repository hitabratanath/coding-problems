function targetSumSubsetAll(A, S, i, K) {
  if (i === arr.length) {
    if (S === K) {
      console.log(A);
    }
    return;
  }

  A.push(arr[i]);
  targetSumSubsetAll(A, S + arr[i], i + 1, K);
  A.pop();
  targetSumSubsetAll(A, S, i + 1, K);
}

// this is a very important pattern, where you need to give a single answer and hence in order to avoid multiple call your function has to return Boolean
function targetSumSubsetOne(A, S, i) {
  if (i === arr.length) {
    if (S === 0) {
      console.log(A);
      return true;
    } else return false;
  }

  A.push(arr[i]);
  if (targetSumSubsetOne(A, S - arr[i], i + 1) === true) {
    return true;
  }
  A.pop();
  if (targetSumSubsetOne(A, S, i + 1) === true) return true;
  return false;
}

// another common pattern if you want no. of matching answers
function countSumset(S, i) {
  if (i === arr.length) {
    return S === 0 ? 1 : 0;
  }
  let a = countSumset(S - arr[i], i + 1);
  let b = countSumset(S, i + 1);
  return a + b;
}
const arr = [1, 2, 1, 4, 3];
const K = 4;

targetSumSubsetAll([], 0, 0, K);
console.log(countSumset(K, 0));
console.log(targetSumSubsetOne([], K, 0));
