// printing from 1 to N using plain recursion
function fun(count, N) {
  if (count > N) return;
  console.log(count);
  fun(count + 1, N);
}
fun(1, 5);

// printing from 1 to N using backtracking
// in backtracing we usually make function calls first and then do our stuff
function funB(count, N) {
  if (count > N) return;
  funB(count + 1, N);
  console.log(count);
}
funB(1, 5);
