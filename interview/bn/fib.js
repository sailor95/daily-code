const fibRecur = pos => {
  return pos <= 2 ? 1 : fib(pos - 1) + fib(pos - 2);
};

// O(n^2) -> why big num exploded? Stack-overflow

const fibIter = pos => {
  let prev2 = 0;
  let prev1 = 1;
  let ans = 0;

  for (let i = 2; i <= pos; i++) {
    ans = prev1 + prev2;
    prev2 = prev1;
    prev1 = ans;
  }

  return ans;
};

// why 'infinity' -> exceed number roof -> use string

console.log(fibIter(5000));
