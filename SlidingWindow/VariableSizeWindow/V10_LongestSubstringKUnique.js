function fun(str) {
  let i = 0,
    j = 0,
    maxLen = 0,
    repo = {};
  while (j < str.length) {
    repo[str[j]] = (repo[str[j]] || 0) + 1;
    let totalUnique = Object.keys(repo).length;
    if (totalUnique < k) j++;
    else if (totalUnique === k) {
      maxLen = Math.max(maxLen, j - i + 1);
      j++;
    } else {
      while (Object.keys(repo).length > k) {
        repo[str[i]]--;
        if (repo[str[i]] === 0) delete repo[str[i]];
        i++;
      }
      if (Object.keys(repo) === k) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
      j++;
    }
  }
  return maxLen;
}
const str = 'aabbcc',
  k = 2;
console.log(fun(str, k));
