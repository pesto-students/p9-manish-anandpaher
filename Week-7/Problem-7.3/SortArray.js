function sortArray(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      let temp = arr[mid];
      arr[mid] = arr[low];
      arr[low] = temp;
      mid++;
      low++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      let temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high--;
    }
  }

  return arr;
}

console.log(sortArray([0, 2, 1, 2, 0]));
console.log(sortArray([0, 1, 0]));

//Time Complexity: O(N)
//Space Complexity: (1)