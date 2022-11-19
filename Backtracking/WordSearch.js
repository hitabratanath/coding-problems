var exist = function (board, word) {
  const n = word.length;
  const N = board.length;
  const M = board[0].length;
  let path = new Set();
  function dfs(r, c, i) {
    if (i === word.length) return true;
    if (
      r === N ||
      c === M ||
      r < 0 ||
      c < 0 ||
      word[i] !== board[r][c] ||
      path.has(`${r}${c}`)
    )
      return false;
    path.add(`${r}${c}`);
    let res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);
    path.delete(`${r}${c}`);
    return res;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;
};

const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  word = 'ABS';
console.log(exist(board, word));
