const tester1 = [10, 21, 0, -7, 35, 7, 9, 23, 18]; // Ans: 7 (return index = 5)

const minIndex = arr => {
  return arr.indexOf(Math.min(...arr.filter(val => val > 0)));
};

const minIndex2 = arr =>
  arr.reduce((ans, curr, idx) => (curr > 0 && curr < arr[ans] ? idx : ans), -1);

console.log(minIndex(tester1));
