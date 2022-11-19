var maxProfit = function (arr) {
  let l = 0,
    r = 1;
  let n = arr.length;
  let maxProfit = 0;
  while (r < n) {
    if (arr[r] < arr[l]) {
      l = r;
    } else if (arr[r] - arr[l] > maxProfit) {
      maxProfit = arr[r] - arr[l];
    }
    r++;
  }
  return maxProfit;
};
