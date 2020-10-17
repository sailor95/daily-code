const arrayWithDuplicates = ['1', '1', '2', '3', '4', '3'];

// 1.
const ans1 = [...new Set(arrayWithDuplicates)];
console.log(`ans 1: ${ans1}`);

// 2.
const ans2 = arrayWithDuplicates.filter(
  (val, idx) => arrayWithDuplicates.indexOf(val) === idx
);
console.log(`ans 2: ${ans2}`);

// 3.
const ans3 = arrayWithDuplicates.reduce(
  (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
  []
);
console.log(`ans 3: ${ans3}`);
