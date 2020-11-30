/**
 * XOR Operation:
 * 0, 0 => 0
 * 0, 1 => 1
 * 1, 0 => 1
 * 1, 1 => 0
 *
 * In Binary:
 *  0001
 *  0110
 * ------
 *  0111
 *
 */

// Ref: https://www.youtube.com/watch?v=30A0Z2KDvaA&ab_channel=HuaHua

/**
 * @param {number[]} arr
 * @return {number}
 */

// O(n^3)
const countTriplets1 = arr => {
  /**
   * Step 1: Find the pattern
   *
   *   X ^ X ^ Y = 0 ^ Y = Y
   *
   * Step 2: Establish the
   *
   *
   * Step 2: Use the pattern to find
   *
   *   arr[x] ^ ... ^ arr[y] =
   *   (arr[0] ^ ... ^ arr[x-1]) ^
   *   (arr[0] ^ ... ^ arr[x-1]) ^ (arr[x] ^ ... ^ arr[y]) =
   *   linearRes(0 ~ x-1) + linearRes(0 ~ y)
   *
   * Step 3: Try to establish the linear res
   *
   *   linearRes[i] = linearRes[0] ^ ... ^ linearRes[i-1]
   */
  let ans = 0;
  const linearRes = [];

  for (let i = 0; i < arr.length; i++) {
    linearRes[i + 1] = linearRes[i] ^ arr[i];
  }

  console.log(linearRes);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j; k < arr.length; k++) {
        // i ~ j-1 -> linearRes[i] + linearRes[j]
        let a = linearRes[i] ^ linearRes[j];
        // j ~ k -> linearRed[j+1] + linearRes[k+1]
        let b = linearRes[j] ^ linearRes[k + 1];
        console.log('ans', a, b);
        if (a === b) ans++;
      }
    }
  }
  return ans;
};

// O(n^2) Still need to process it again
var countTriplets2 = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let xor = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      xor ^= arr[j];
      if (xor == 0) {
        count += j - i;
      }
    }
  }
  return count;
};

const tester1 = [2, 3, 1, 6, 7];
const tester2 = [1, 1, 1, 1, 1];
const testerBig = [
  723,
  875,
  440,
  136,
  304,
  271,
  63,
  294,
  281,
  169,
  432,
  185,
  265,
  758,
  1023,
  760,
  263,
  13,
  266,
  458,
  192,
  774,
  966,
  855,
  145,
  115,
  226,
  233,
  11,
  710,
  717,
  281,
  980,
  386,
  598,
  564,
  98,
  604,
  574,
  717,
  243,
  309,
  454,
  676,
  866,
  944,
  210,
  301,
  511,
  700,
  835,
  696,
  507,
  794,
  737,
  999,
  262,
  36,
  290,
  981,
  759,
  52,
  707,
  734,
  29,
  273,
  268,
  853,
  601,
  293,
  892,
  66,
  830,
  145,
  943,
  959,
  16,
  989,
  973,
  609,
  428,
  289,
  141,
  985,
  852,
  974,
  154,
  522,
  656,
  894,
  494,
  520,
  998,
  934,
  64,
  967,
  903,
  708,
  323,
  927,
  732,
  878,
  434,
  972,
  638,
  550,
  88,
  805,
  893,
  514,
  383,
  686,
  977,
  165,
  884,
  691,
  455,
  39,
  480,
  698,
  858,
  400,
  714,
  230,
  556,
  566,
  26,
  851,
  841,
  240,
  953,
  938,
  19,
  385,
  402,
  931,
  561,
  502,
  967,
  104,
  943,
  948,
  27,
  248,
  227,
  677,
  582,
  541,
  91,
  703,
  740,
  871,
  387,
  788,
  663,
  210,
  581,
  335,
  778,
  514,
  264,
  538,
  786,
  369,
  611,
  349,
  830,
  246,
  968,
  152,
  848,
  471,
  647,
  488,
  879,
  900,
  235,
  726,
  573,
  200,
  757,
  236,
  537,
  420,
  957,
  793,
  164,
  120,
  220,
  276,
  456,
  772,
  716,
  112,
  700,
  40,
  660,
  498,
  870,
  559,
  329,
  411,
  210,
  783,
  989,
  732,
  257,
  988,
  733,
  743,
  58,
  8,
  50,
  266,
  312,
  461,
  245,
  849,
  932,
  758,
  338,
  62,
  364,
  474,
  182,
  680,
  542,
  201,
  727,
  782,
  473,
  567,
  1006,
  39,
  969,
  575,
  502,
  788,
  738,
  297,
  971,
  499,
  568,
];

console.log(countTriplets2(tester1));
// console.log(countTriplets(tester2));
// console.log(countTriplets(testerBig));

// Time Limit Exceed
const countTriplets = arr => {
  let ans = 0;
  const allCompos = [];

  // find out all the compositions
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j; k < arr.length; k++) {
        allCompos.push([i, j, k]);
      }
    }
  }

  // calculate all the possibilities
  const aMemo = new Map();
  const bMemo = new Map();

  const hasMemo = (memo, num1, num2) => memo.has(`[${num1},${num2}]`);
  const setMemo = (memo, num1, num2, val) => memo.set(`[${num1},${num2}]`, val);
  const getMemo = (memo, num1, num2) => memo.get(`[${num1},${num2}]`);

  allCompos.forEach(([i, j, k]) => {
    let [a, b] = [arr[i], arr[j]];

    // if there's memo for a, if not
    if (hasMemo(aMemo, i, j)) {
      a = getMemo(aMemo, i, j);
    } else {
      for (let x = i + 1; x < j; x++) {
        a ^= arr[x];
      }
      setMemo(aMemo, i, j, a);
    }

    if (hasMemo(bMemo, j, k)) {
      b = getMemo(bMemo, j, k);
    } else {
      for (let y = j + 1; y <= k; y++) {
        b ^= arr[y];
      }
      setMemo(bMemo, j, k, b);
    }

    if (a === b) {
      ans++;
    }
  });

  return ans;
};
