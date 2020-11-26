/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
// 100 ms, faster than 53.90%
const diagonalSort = mat => {
  const map = {};

  for (let m = 0; m < mat.length; m++) {
    for (let n = 0; n < mat[0].length; n++) {
      const d = m - n;
      if (!map[d]) {
        map[d] = [];
      }
      map[d].push(mat[m][n]);
    }
  }

  for (let key in map) {
    map[key].sort((a, b) => a - b);
  }

  for (let m = 0; m < mat.length; m++) {
    for (let n = 0; n < mat[0].length; n++) {
      const d = m - n;
      mat[m][n] = map[d].shift();
    }
  }
  return mat;
};

const tester1 = [
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2],
];

console.log(diagonalSort(tester1));
