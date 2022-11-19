function fun(A, i, n, nums) {
  if (i === n) {
    result.push([...A]);
    return;
  }
  fun(A, i + 1, n, nums);
  fun([...A, nums[i]], i + 1, n, nums);
}
const nums = [1, 2, 3];
let result = [];
fun([], 0, nums.length, nums);
console.log(result);
