// YOU NEED TO WRITE THE LOGIC OF MAH
function MAH_Maker(arr) {
  let result = new Array(arr.length);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(arr[0].length);
  }

  for (let i = 0; i < arr[0].length; i++) {
    result[0][i] = arr[0][i];
  }

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      result[i][j] = arr[i][j] === 0 ? 0 : arr[i][j] + result[i - 1][j];
    }
  }
  let maxArea = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < result.length; i++) {
    let value = MAH(result[i]);
    maxArea = value > maxArea ? value : maxArea;
  }
}
const arr = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
];
MAH_Maker(arr);
