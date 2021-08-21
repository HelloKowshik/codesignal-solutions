let arr = [1, 3, 2, 1];
arr = [1, 3, 2];
arr = [1, 1, 2, 3, 4, 4];
arr = [3, 6, 5, 8, 10, 20, 15];
arr = [1, 2, 1, 2];
function almostIncreasingSequence(sequence) {
  let count = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        return false;
      }
    }
  }
  return count <= 1;
}
console.log(almostIncreasingSequence(arr));
