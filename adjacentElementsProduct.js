let inputArray = [3, 6, -2, -5, 7, 3];
function adjacentElementsProduct(inputArray) {
  let left = 0,
    right = 1,
    currentMax = -Infinity;
  if (inputArray.length === 2) return inputArray[left] * inputArray[right];
  while (left < right && right <= inputArray.length) {
    if (inputArray[left] * inputArray[right] > currentMax) {
      currentMax = inputArray[left] * inputArray[right];
    }
    left++;
    right++;
  }
  return currentMax;
}
console.log(adjacentElementsProduct(inputArray));
