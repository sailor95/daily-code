/**
 * @param {string} target
 * @return {number}
 */
const minFlips = target => {
  const zeroChunksLength = target.split('1').filter(item => item).length;
  const oneChunksLength = target.split('0').filter(item => item).length;

  return zeroChunksLength + oneChunksLength - (target[0] === '0' ? 1 : 0);
};

const minFlips2 = target =>
  target.split('1').filter(item => item).length +
  target.split('0').filter(item => item).length -
  (target[0] === '0' ? 1 : 0);

const tester1 = '10111';
const tester2 = '101';
const tester3 = '00000';
const tester4 = '001011101';

console.log(minFlips(tester1));
console.log(minFlips(tester2));
console.log(minFlips(tester3));
console.log(minFlips(tester4));
