// reversing array with the help of recursion and two pointers
function arrayReverse(l, r) {
  if (l >= r) return arr;
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
  return arrayReverse(l + 1, r - 1);
}
// ------------------------------------------------------------------------------

// reversing array with the help of recursion with single pointer
function arrayReverse2(i, L) {
  if (i >= L / 2) return arr;
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
  return arrayReverse2(i + 1, L);
}

function checkPalindrome(str, i) {
  if (i >= str.length / 2) return true;
  if (str[i] !== str[str.length - 1 - i]) {
    return checkPalindrome(str, i + 1);
  }
  return false;
}
const str = '123321';
console.log(checkPalindrome(str, 0));
