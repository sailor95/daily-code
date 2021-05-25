const reduceVal = (fn, args, seedVal) =>
  args.reduce((acc, curr) => fn.call(fn, acc, curr), seedVal);

const infiniteCurry = (fn, seed) => {
  const innerCurry = (...args) => (...followingArgs) =>
    !followingArgs.length
      ? reduceVal(fn, args, seed)
      : innerCurry(...args, reduceVal(fn, followingArgs, seed));

  return innerCurry();
};

const iSum = infiniteCurry((x, y) => x + y, 0);
const iMul = infiniteCurry((x, y) => x * y, 1);

console.log(iSum(1)(3, 4)(5, 6)(7, 8, 9)()); // 43
console.log(iMul(1)(3, 4)(5, 6)()); // 360
