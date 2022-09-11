// insertion sort
const insertionSort = (arr) => {
  let i = 1;
  let len = arr.length;
  for (i; i < len; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort(arrayOfNums))





// DOM manipulation
