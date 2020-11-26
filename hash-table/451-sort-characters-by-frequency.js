/**
 * @param {string} s
 * @return {string}
 */
// 84 ms, faster than 98.80%
const frequencySort = s => {
  const charArr = s.split('');
  const hash = {};

  charArr.forEach(char => {
    if (hash[char]) {
      hash[char].count++;
    } else {
      hash[char] = {
        char,
        count: 1,
      };
    }
  });

  const charOrder = Object.keys(hash).sort(
    (a, b) => hash[b].count - hash[a].count
  );

  return charOrder.reduce(
    (acc, curr) => acc + hash[curr].char.repeat(hash[curr].count),
    ''
  );
};

// 96 ms, faster than 78.73%
const frequencySort2 = s =>
  Object.values(
    s.split('').reduce((acc, curr) => {
      if (acc[curr]) {
        acc[curr] += curr;
      } else {
        acc[curr] = curr;
      }
      return acc;
    }, {})
  )
    .sort((a, b) => b.length - a.length)
    .join('');

const tester1 = 'acadd';
const tester2 = 'acacac';
const tester3 = 'Aacckad';

console.log(frequencySort(tester3));
console.log(frequencySort2(tester3));
