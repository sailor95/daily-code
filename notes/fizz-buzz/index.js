const fizzBuzz = arr => {
  const result = [];
  const mappings = {
    3: 'Fizz',
    5: 'Buzz',
  };

  arr.forEach(val => {
    let ans = '';

    for (let key in mappings) {
      if (val % key === 0) {
        ans += mappings[key];
      }
    }

    if (!ans.length) {
      ans += val;
    }

    result.push(ans);
  });

  return result;
};

const tester1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(fizzBuzz(tester1));
