const dupTester = [1, '1', '2', 'b', 'b'];

// ES6
const dedup1 = arr => {
  if (!Array.isArray(arr)) return;

  return [...new Set(arr)];
};

// Old School
const dedup2 = arr => {
  if (!Array.isArray(arr)) return;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) arr.splice(j, 1);
      j--;
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

console.log(dedup3(dupTester));
