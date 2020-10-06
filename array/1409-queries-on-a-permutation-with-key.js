/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */

// Test which is faster
const testArrayEstablishTime = (m = 100) => {
  // 0.153ms
  console.time('way 1');
  const p = Array.from({length: m}, (_, idx) => idx + 1);
  console.timeEnd('way 1');

  // 0.029ms
  console.time('way 2');
  const p2 = [...Array(m)].map((_, idx) => idx + 1);
  console.timeEnd('way 2');
};

// 84 ms, faster than 58.78%
const processQueries = (queries, m) => {
  const p = [...Array(m)].map((_, idx) => idx + 1);
  const ans = [];

  queries.forEach(item => {
    // push the index to ans
    const index = p.indexOf(item);
    ans.push(index);
    // update the permutation
    p.unshift(item);
    p.splice(index + 1, 1);
  });

  return ans;
};

const tester1 = [3, 1, 2, 1];
const tester2 = [4, 1, 2, 2];

console.log(processQueries(tester1, 5));
console.log(processQueries(tester2, 4));
