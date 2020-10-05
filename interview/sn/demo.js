/* Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/

const solution = arr => {
  arr.sort((a, b) => b - a);

  if (arr[0] < 0) {
    return 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - arr[i + 1] > 1) {
      return arr[i] - 1;
    }
  }

  return arr[0] + 1;
};

const tester1 = [1, 3, 6, 4, 1, 2];
const tester2 = [-1, -3];

console.log(solution(tester1));
console.log(solution(tester2));
