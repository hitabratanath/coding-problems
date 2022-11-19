function findTargetSumWays(nums, target) {
  let n = nums.length;
  let sum = nums.reduce((a, b) => a + b);
  let W = (sum + target) / 2;
  if (W % 1 !== 0) return 0;
  
}
const nums = [1, 1, 1, 1, 1],
  target = 3;
console.log(findTargetSumWays(nums, target, nums.length));
