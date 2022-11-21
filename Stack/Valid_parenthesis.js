var isValid = function (s) {
  let arr = s.split('');
  let matching = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  let OpenBkts = Object.keys(matching);
  console.log(OpenBkts);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (OpenBkts.indexOf(arr[i]) > -1) {
      result.push(arr[i]);
    } else {
      let top = result[result.length - 1];
      if (arr[i] === matching[top]) result.pop();
      else return false;
    }
  }
  return result.length === 0;
};
const s = '(){}[](';
console.log(isValid(s));
