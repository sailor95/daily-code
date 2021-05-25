const slowFunc = (a) => a * a * a;

const memoFunc = (func) => {
  const map = new Map();

  const innerFunc = (arg) => {
    if (map.has(arg)) {
      console.log("Use memo");
      return map.get(arg);
    }

    console.log("None memo");
    const result = func(arg);

    map.set(arg, result);

    return result;
  };

  return innerFunc;
};

const slow = memoFunc(slowFunc);
console.log(slow(5)); // 1st time, none memo
console.log(slow(5)); // n time, use memo
