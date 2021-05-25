const dupTester = [1, '1', '2', 'b', 'b'];

// ES6
const dedup1 = arr => {
  if (!Array.isArray(arr)) return;

  return [...new Set(arr)]; // Array.from(new Set(arr))
};

// Old School
const dedup2 = arr => {
  if (!Array.isArray(arr)) return;

  for (let i = 0, len = arr.length; i < len - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) arr.splice(j, 1);
      j--;
      len--;
    }
  }

  return arr;
};

// Filter
const dedup3 = arr => {
  if (!Array.isArray(arr)) return;

  return arr.filter((item, idx, self) => self.indexOf(item) === idx);
};

// Reduce (real slow)
const dedup4 = arr => {
  if (!Array.isArray(arr)) return;

  return arr.reduce(
    (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
    []
  );
};

const dedup5 = arr => {
  if (!Array.isArray(arr)) return;

  const sortedArr = arr.sort();
  const res = [sortedArr[0]];

  for (let i = 1; i < sortedArr.length; i++) {
    sortedArr[i] !== sortedArr[i - 1] && res.push(sortedArr[i]);
  }

  return res;
};

const dedup6 = arr => {
  if (!Array.isArray(arr)) return;

  const res = [];
  const map = {};

  for (let i of arr) {
    if (!map[i]) {
      res.push(i);
      map[i] = true;
    }
  }

  return res;
};

console.log(dedup3(dupTester));
