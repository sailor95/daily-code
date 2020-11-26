/**
 * @param {number} n
 * @return {number}
 */
// Beautiful recursive
const countVowelStrings = n => {
  const helper = (ans, curr, n, arr, startIdx) => {
    if (n === 0) {
      ans.push([...curr]);
      return;
    }

    for (let i = startIdx; i < arr.length; i++) {
      curr.push(arr[i]);
      helper(ans, curr, n - 1, arr, i);
      curr.pop();
    }
  };

  const _ans = [];
  const _curr = [];
  const _arr = ['a', 'e', 'i', 'o', 'u'];

  helper(_ans, _curr, n, _arr, 0);

  console.log(_ans);

  return _ans.length;
};

// Simplified recursive
const countVowelStringsSimp = n => {
  let ans = 0;

  const helper = (counter, startIdx) => {
    if (counter === 0) {
      ans++;
      return;
    }

    for (let i = startIdx; i < 5; i++) {
      helper(counter - 1, i);
    }
  };

  helper(n, 0);

  return ans;
};

const countVowelStringsByLayer = n => {
  const ans = new Array(5).fill(1);
  const typesCount = 5; // ['a','e','i','o','u'].length

  for (let i = 0; i < n - 1; i++) {
    for (let k = 0; k < typesCount; k++) {
      for (let j = k + 1; j < typesCount; j++) {
        ans[k] += ans[j];
      }
    }
  }

  return ans.reduce((acc, curr) => acc + curr, 0);
};

console.log(countVowelStringsByLayer(3));

// Cool one (don't get it yet)
var countVowelStringsCool = function (n) {
  let a = 1,
    e = 1,
    i = 1,
    o = 1,
    u = 1;

  while (n > 1) {
    a = a + e + i + o + u;
    e = e + i + o + u;
    i = i + o + u;
    o = o + u;
    u = u;
    n--;
  }

  return a + e + i + o + u;
};

// Super short
const countVowelStringsShort = n => {
  return ((n + 4) * (n + 3) * (n + 2) * (n + 1)) / 24;
};

// console.log(countVowelStringsSimp(1));
// console.log(countVowelStringsSimp(2));
// console.log(countVowelStringsSimp(3));
// console.log(countVowelStringsCool(4));
// console.log(countVowelStringsCool(5));
