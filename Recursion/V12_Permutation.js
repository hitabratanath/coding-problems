// https://www.youtube.com/watch?v=4FdPoW4Qzb4
// refer above video for explanation as this is very important template for permutation
function permutation(nums, i) {
  if (i === nums.length) {
    result.push([...nums]);
    return;
  }
  for (let k = i; k < nums.length; k++) {
    [nums[i], nums[k]] = [nums[k], nums[i]];
    permutation(nums, i + 1);
    [nums[i], nums[k]] = [nums[k], nums[i]];
  }
}
const nums = [1, 2, 3];
let result = [];
permutation(nums, 0);
console.log(result);
