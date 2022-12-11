function fun(nums, k) {
  let i = 0,
    j = 0,
    maxWindow = 0,
    sum = 0;
  while (j < nums.length) {
    sum = sum + nums[j];
    if (sum < k) j++;
    else if (sum === k) {
      maxWindow = Math.max(maxWindow, j - i + 1);
      j++;
    } else {
      while (sum > k) sum = sum - nums[i++];
      if (sum === k) maxWindow = Math.max(maxWindow, j - i + 1);
      j++;
    }
  }
  return maxWindow;
}
const nums = [4, 1, 1, 1, 2, 3, 5],
  k = 5;
console.log(fun(nums, k));
