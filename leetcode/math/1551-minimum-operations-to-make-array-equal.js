/**
 * @param {number} n
 * @return {number}
 */
// 84 ms, faster than 63.19%
const minOperations = n => {
  const tillIndex = Math.floor(n / 2);
  let ans = 0;

  if (n % 2 === 0) {
    for (let i = 0; i < tillIndex; i++) {
      ans += i * 2 + 1;
    }
  } else {
    for (let i = 0; i < tillIndex; i++) {
      ans += 2 * (i + 1);
    }
  }

  return ans;
};

// (Top + Bottom) x height / 2
const minOperations2 = n => (n % 2 === 0 ? (n * n) / 4 : (n * n - 1) / 4);

const tester0 = 3;
const tester1 = 5;
const tester2 = 6;

console.log(minOperations2(tester0));
console.log(minOperations2(tester1));
console.log(minOperations2(tester2));
