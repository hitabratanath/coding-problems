function lengthOfLongestSubstring(str) {
  let i = 0,
    j = 0,
    repo = {},
    maxLength = 0;
  while (j < str.length) {
    repo[str[j]] = (repo[str[j]] || 0) + 1;
    let allUnique = Object.keys(repo).length === j - i + 1;
    if (allUnique) {
      maxLength = Math.max(maxLength, j - i + 1);
      j++;
    } else {
      while (!allUnique) {
        repo[str[i]]--;
        if (repo[str[i]] === 0) delete repo[str[i]];
        i++;
        allUnique = Object.keys(repo).length === j - i + 1;
      }
      if (allUnique) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
      j++;
    }
  }
  return maxLength;
}
const str = 'pwwkew';
console.log(lengthOfLongestSubstring(str));
