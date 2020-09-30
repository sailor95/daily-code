/**
 * @param {number[][]} rectangle
 */
const SubrectangleQueries = function (rectangle) {
  this.rect = rectangle;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (
  row1,
  col1,
  row2,
  col2,
  newValue
) {
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      this.rect[i][j] = newValue;
    }
  }
};

SubrectangleQueries.prototype.updateSubrectangle2 = function (
  row1,
  col1,
  row2,
  col2,
  newValue
) {
  let newArr = new Array(col2 - col1 + 1).fill(newValue);
  for (let i = row1; i <= row2; i++) {
    this.rect[i].splice(col1, col2 - col1 + 1, ...newArr);
  }
};

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
  return this.rect[row][col];
};

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
