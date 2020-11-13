/**
 * @param {number[]} T
 * @return {number[]}
 */
// Time exceed limit
const dailyTemperatures = T => {
  const ans = [];
  const map = new Map();

  for (let i = 0; i < T.length; i++) {
    for (let [key, val] of map) {
      if (T[i] > val.temp) {
        ans[key] = val.count;
        map.delete(key);
      } else {
        map.set(key, { temp: val.temp, count: val.count + 1 });
      }
    }

    map.set(i, { temp: T[i], count: 1 });
  }

  for (let [key, val] of map) {
    ans[key] = 0;
  }

  return ans;
};

// 3360 ms, faster than 5.14%
const dailyTemperatures2 = T =>
  T.map((temp, idx) => {
    const nextIdx = T.slice(idx + 1).findIndex(nextTemp => nextTemp > temp);
    return nextIdx !== -1 ? nextIdx + 1 : 0;
  });

// Reverse
// 144 ms, faster than 94.57%
const dailyTemperatures3 = T => {
  const queue = [];
  const ans = new Array(T.length).fill(0);

  for (let i = T.length - 1; i >= 0; i--) {
    while (queue.length && T[queue[queue.length - 1]] <= T[i]) {
      queue.pop();
    }

    if (queue.length) {
      ans[i] = queue[queue.length - 1] - i;
    }

    queue.push(i);
  }

  return ans;
};

// Forward
// 152 ms, faster than 84.57%
const dailyTemperatures4 = T => {
  const queue = [];
  const ans = new Array(T.length).fill(0);

  for (let i = 0; i < T.length; i++) {
    while (queue.length && T[i] > T[queue[queue.length - 1]]) {
      const top = queue.pop();
      ans[top] = i - top;
    }
    queue.push(i);
  }

  return ans;
};

const tester1 = [73, 74, 75, 71, 69, 72, 76, 73];

// console.log(dailyTemperatures(tester1));
console.log(dailyTemperatures4(tester1));
