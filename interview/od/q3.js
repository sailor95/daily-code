// wrong
const mul = (...args) => args.reduce((prev, curr) => prev * curr, 1);

const mul2 = arg => {
  const ans = arg;

  const innerMul = nextArg => {
    if (nextArg) {
      ans *= nextArg;
      return innerMul(nextArg);
    } else {
      return ans;
    }
  };

  return innerMul(arg);
};

const mul3 = a => b => c => a * b * c;

console.log(mul3(2)(3)(4));
console.log(mul3(3)(4)(4));

const initState = {
  city: 'Taipei',
};

const reducer = (state = initState, action) => {
  switch (action.name) {
    case 'UPDATE':
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};
