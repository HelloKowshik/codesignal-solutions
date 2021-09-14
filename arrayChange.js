let inputArray = [1, 1, 1];
inputArray = [2, 1, 10, 1];
// inputArray = [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15];

function arrayChange(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      let diff = inputArray[i] + 1 - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i] + 1;
      count += diff;
    }
  }
  return count;
}

console.log(arrayChange(inputArray));
