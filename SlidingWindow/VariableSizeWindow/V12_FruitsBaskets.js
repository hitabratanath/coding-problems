// THIS QUESTION IS VERY SIMILAR TO WHAT ADITYA HAS DONE IN HIS VIDEO RATHER THIS IS A LEETCODE PROBLEM
function totalFruit(fruits) {
  let i = 0,
    j = 0,
    repo = {},
    maxFruits = 0;
  while (j < fruits.length) {
    repo[fruits[j]] = (repo[fruits[j]] || 0) + 1;
    let repoLength = Object.keys(repo).length;
    if (repoLength < 2) {
      maxFruits = Math.max(maxFruits, j - i + 1);
      j++;
    } else if (repoLength === 2) {
      maxFruits = Math.max(maxFruits, j - i + 1);
      j++;
    } else {
      while (repoLength > 2) {
        repo[fruits[i]]--;
        if (repo[fruits[i]] === 0) delete repo[fruits[i]];
        i++;
        repoLength = Object.keys(repo).length;
      }
      if (repoLength === 2) maxFruits = Math.max(maxFruits, j - i + 1);
      j++;
    }
  }
  return maxFruits;
}

const fruits = [0];
console.log(totalFruit(fruits));
