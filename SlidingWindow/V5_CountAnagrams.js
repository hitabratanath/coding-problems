const _ = require('lodash');
function findAnagrams(str, pat) {
  let result = [],
    patRepo = {},
    i = 0,
    j = 0,
    temp = {};
  pat.split('').forEach((ch) => (patRepo[ch] = (patRepo[ch] || 0) + 1));
  while (j < str.length) {
    temp[str[j]] = (temp[str[j]] || 0) + 1;
    if (j - i + 1 < pat.length) j++;
    else {
      if (pat.indexOf(str[i]) === -1) {
        j++;
        i = j;
        temp = {};
      } else if (_.isEqual(temp, patRepo)) {
        result.push(j - pat.length + 1);
      }
      if (temp[str[i]] > 1) temp[str[i]]--;
      else delete temp[str[i]];
      j++;
      i++;
    }
  }
  return result;
}

const str = 'abab';
const pat = 'ab';
console.log(findAnagrams(str, pat));
