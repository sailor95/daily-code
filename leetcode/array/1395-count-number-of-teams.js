/**
 * @param {number[]} rating
 * @return {number}
 */
const numTeams = rating => {
  let result = 0;
  for (let i = 0; i + 2 < rating.length; i++) {
    for (let j = i + 1; j + 1 < rating.length; j++) {
      for (let k = j + 1; k < rating.length; k++) {
        if (rating[i] < rating[j] && rating[j] < rating[k]) result++;
        if (rating[i] > rating[j] && rating[j] > rating[k]) result++;
      }
    }
  }
  return result;
};

// 72 ms, faster than 98.68%
const numTeams2 = rating => {
  let ans = 0;

  for (let i = 1; i < rating.length - 1; i++) {
    let descLeft = 0;
    let descRight = 0;

    let ascLeft = 0;
    let ascRight = 0;

    // Left side
    for (let j = 0; j < i; j++) {
      if (rating[j] > rating[i]) descLeft++;
      if (rating[j] < rating[i]) ascLeft++;
    }

    // Right side
    for (let j = i + 1; j < rating.length; j++) {
      if (rating[j] < rating[i]) descRight++;
      if (rating[j] > rating[i]) ascRight++;
    }

    ans += descLeft * descRight + ascLeft * ascRight;
  }

  return ans;
};

const tester1 = [2, 5, 3, 4, 1];
const tester2 = [2, 1, 3];
const tester3 = [1, 2, 3, 4];

console.log(numTeams2(tester1));
console.log(numTeams2(tester2));
console.log(numTeams2(tester3));
