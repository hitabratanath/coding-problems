function fun(str, i, n, S) {
  if (i === n) {
    result.push(str.slice());
    return;
  }
  if ((S[i] >= 'a' && S[i] <= 'z') || (S[i] >= 'A' && S[i] <= 'Z')) {
    // this is a template of backtracking for push and pop
    // you could have directly pass the modified arguement but I have written this for more clarity of algo
    let newstr = str + S[i].toLowerCase();
    fun(newstr, i + 1, n, S);
    newstr = newstr.substring(0, newstr.length - 1) + S[i].toUpperCase();
    fun(newstr, i + 1, n, S);
  } else {
    fun(str + S[i], i + 1, n, S);
  }
}
// --------------------------------------------------------------------------------------------------------------
function fun2(str, i, n, S) {
  if (i === n) {
    result.push(str);
    return;
  }
  if ((S[i] >= 'a' && S[i] <= 'z') || (S[i] >= 'A' && S[i] <= 'Z')) {
    // this is similar to above but more consice
    fun2(str + S[i].toLowerCase(), i + 1, n, S);
    fun2(str + S[i].toUpperCase(), i + 1, n, S);
  } else {
    fun2(str + S[i], i + 1, n, S);
  }
}
// --------------------------------------------------------------------------------------------------------------
const s = 'a1b';
let result = [];
fun2('', 0, s.length, s);
console.log(result);
