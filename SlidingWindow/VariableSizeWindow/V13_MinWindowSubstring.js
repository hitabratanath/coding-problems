function minWindow(s, t) {
  let i = 0,
    j = 0,
    count = 0,
    minCount = Number.POSITIVE_INFINITY,
    repo = {};
  t.split('').forEach((c) => (repo[c] = (repo[c] || 0) + 1));
  while (j < s.length) {
    if (s[j] in repo) {
      repo[s[j]]--;
      if (repo[s[j]] === 0) count--;
      j++;
    } else {
      j++;
    }
    if(count === 0)
  }
  return minCount;
}
const s = 'ADOBECODEBANC',
  t = 'ABC';
console.log(minWindow(s, t));
