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

// Iteration
function mergeSortIter(arr) {
  var sorted = arr.slice(),
    n = sorted.length,
    buffer = new Array(n);

  for (var size = 1; size < n; size *= 2) {
    for (var leftStart = 0; leftStart < n; leftStart += 2 * size) {
      var left = leftStart,
        right = Math.min(left + size, n),
        leftLimit = right,
        rightLimit = Math.min(right + size, n),
        i = left;

      while (left < leftLimit && right < rightLimit) {
        if (sorted[left] <= sorted[right]) {
          buffer[i++] = sorted[left++];
        } else {
          buffer[i++] = sorted[right++];
        }
      }
      while (left < leftLimit) {
        buffer[i++] = sorted[left++];
      }
      while (right < rightLimit) {
        buffer[i++] = sorted[right++];
      }
    }

    var temp = sorted,
      sorted = buffer,
      buffer = temp;
  }

  return sorted;
}

const tester1 = [10, -1, 2, 5, 0, 6, 4, -5];

mergeSortIter(tester1);
