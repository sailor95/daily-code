/**
 * @param {string} s
 * @return {number}
 */
// Time out
const numSplits = s => {
  const arr = s.split('');
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    const left = new Set(arr.slice(0, i + 1));
    const right = new Set(arr.slice(i + 1));

    if (left.size === right.size) {
      ans++;
    }
  }

  return ans;
};

// 112 ms, faster than 81.58%
const numSplits2 = s => {
  const countFromLeft = new Array(s.length);
  const countFromRight = new Array(s.length);
  const leftSet = new Set();
  const rightSet = new Set();
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    leftSet.add(s[i]);
    countFromLeft[i] = leftSet.size;
  }

  for (let i = s.length - 1; i >= 0; i--) {
    rightSet.add(s[i]);
    countFromRight[i] = rightSet.size;
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (countFromLeft[i] === countFromRight[i + 1]) {
      ans++;
    }
  }

  return ans;
};

// 128 ms, faster than 67.54%
const numSplits3 = s => {
  const arr = new Array(s.length - 1).fill(0);
  const [left, right] = [new Set(), new Set()];

  for (let i = 0; i < arr.length; i++) {
    arr[i] += left.add(s[i]).size;
    arr[arr.length - 1 - i] -= right.add(s[s.length - 1 - i]).size;
  }

  return arr.filter(i => i === 0).length;
};

const tester1 = 'aacaba';
const tester2 = 'abcd';
const tester3 = 'aaaaa';
const tester4 = 'acbadbaada';

console.log(numSplits2(tester1));
console.log(numSplits2(tester2));
console.log(numSplits2(tester3));
console.log(numSplits2(tester4));

console.log(numSplits3(tester1));
console.log(numSplits3(tester2));
console.log(numSplits3(tester3));
console.log(numSplits3(tester4));
