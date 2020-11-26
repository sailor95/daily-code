/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = matrix => {
  let ans = 0;

  const checkUpperSub = (m, n) => {
    const up = matrix[m][n - 1];
    const left = matrix[m - 1][n];
    const upLeft = matrix[m - 1][n - 1];

    if (up && left && upLeft) {
      matrix[m][n] += Math.min(up, left, upLeft);
    }
  };

  for (let m = 1; m < matrix.length; m++) {
    for (let n = 1; n < matrix[0].length; n++) {
      if (matrix[m][n]) {
        checkUpperSub(m, n);
      }
    }
  }

  for (let m = 0; m < matrix.length; m++) {
    for (let n = 0; n < matrix[0].length; n++) {
      ans += matrix[m][n];
    }
  }

  return ans;
};
