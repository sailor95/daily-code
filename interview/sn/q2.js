const solution = arr => {
  const arrLength = arr.length;

  if (arrLength <= 2) return arrLength;

  let ans = 2;
  let tempAns = 2;

  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === arr[i + 2]) {
      tempAns++;
    } else {
      tempAns = 2;
    }
    ans = Math.max(ans, tempAns);
  }

  return ans;
};

const tester1 = [3, 2, 3, 2, 3];
const tester2 = [7, 4, -2, 4, -2, -9];
const tester3 = [7, -5, -5, -5, 7, -1, 7];

console.log(solution(tester1));
console.log(solution(tester2));
console.log(solution(tester3));
