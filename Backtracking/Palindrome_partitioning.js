const s = 'aabbbbccdddddeeaabb';
let repo = {};
s.split('').forEach((el) => (repo[el] = (repo[el] || 0) + 1));
let val = Object.values(repo);
console.log(val);
