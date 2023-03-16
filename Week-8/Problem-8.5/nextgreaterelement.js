function nextGreaterElements(arr) {
  const stack = [];
  const result = new Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      const topIndex = stack.pop();
      result[topIndex] = arr[i];
    }
    stack.push(i);
  }

  return result;
}

let arr = [1, 3, 2, 4];
let result = nextGreaterElements(arr);
console.log(result);

arr = [6, 8, 0, 1, 3];
result = nextGreaterElements(arr);
console.log(result);
