//functoinal recursion at any time our function returns something unlike parametrized recursion
function sum(count) {
  if (count > 5) return 0;
  return count + sum(count + 1);
}
console.log(sum(1));
// -------------------------------------------------------

// another way to write functional recursion
function sumB(count) {
  if (count < 1) return 0;
  return count + sumB(count - 1);
}
console.log(sumB(5));
// -------------------------------------------------------

// recursion with parameter as the function does not returns something but carries answer along
function sumP(count, sum = 0) {
  if (count > 5) {
    console.log(sum);
    return;
  }
  sumP(count + 1, sum + count);
}
sumP(1);
// -------------------------------------------------------
function fact(count) {
  if (count === 1) return 1;
  return count * fact(count - 1);
}
console.log(fact(5));
