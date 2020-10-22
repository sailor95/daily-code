/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = (s, t) => {
  const mapper = {};
  let ans = 0;

  [...s].forEach(word => {
    if (mapper[word]) {
      mapper[word]++;
    } else {
      mapper[word] = 1;
    }
  });

  [...t].forEach(word => {
    if (mapper[word] === 1) {
      delete mapper[word];
    } else if (mapper[word]) {
      mapper[word]--;
    }
  });

  for (word in mapper) {
    ans += mapper[word];
  }

  return ans;
};

// 188 ms, faster than 21.52%
const minSteps2 = (s, t) => {
  const mapper = {};
  let ans = 0;

  s.split('').forEach(word => {
    if (mapper[word]) {
      mapper[word]++;
    } else {
      mapper[word] = 1;
    }
  });

  t.split('').forEach(word => {
    if (mapper[word] === 1) {
      delete mapper[word];
    } else if (mapper[word]) {
      mapper[word]--;
    }
  });

  for (word in mapper) {
    ans += mapper[word];
  }

  return ans;
};

// 176 ms, faster than 25.95%
const minSteps3 = (s, t) => {
  const mapper = {};

  s.split('').forEach(word => {
    if (mapper[word]) {
      mapper[word]++;
    } else {
      mapper[word] = 1;
    }
  });

  return t.split('').reduce((acc, curr) => {
    mapper[curr] ? mapper[curr]-- : acc++;
    return acc;
  }, 0);
};

const tester1 = 'leetcode';
const tester2 = 'practice';
console.log(minSteps(tester1, tester2));
console.log(minSteps3(tester1, tester2));

const tester3 = 'anagram';
const tester4 = 'mangaar';
console.log(minSteps(tester3, tester4));
console.log(minSteps3(tester3, tester4));

const tester5 = 'xxyyzz';
const tester6 = 'xxyyzz';
console.log(minSteps(tester5, tester6));
console.log(minSteps3(tester5, tester6));
