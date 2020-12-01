const mergeSort = unsortedArray => {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middle = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  console.log('merge', left, right);
  const resArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      resArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const tester1 = [10, -1, 2, 5, 0, 6, 4, -5];

mergeSort(tester1);
