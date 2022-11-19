function findTargetSumWays(nums, target) {
  let n = nums.length;
  return helper(nums, target, n);
}

function helper(nums, target, n, memo = {}) {
  if (n === 0 && target === 0) return 1;
  if (n === 0) return 0;
  let key = target + ' ' + n;
  if (key in memo) return memo[key];

  let plus = helper(nums, target + nums[n - 1], n - 1, memo);
  let neg = helper(nums, target - nums[n - 1], n - 1, memo);
  memo[key] = plus + neg;
  return memo[key];
}
const nums = [1, 1, 1, 1, 1],
  target = 3;
console.log(findTargetSumWays(nums, target, nums.length));
