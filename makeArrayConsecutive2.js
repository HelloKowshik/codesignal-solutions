let arr = [6, 2, 3, 8];
arr = [0, 3];
arr = [5, 4, 6];
arr = [6, 3];
function makeArrayConsecutive2(statues) {
  let max = Math.max(...statues);
  let min = Math.min(...statues);
  let count = 0;
  for (let i = min; i <= max; i++) {
    if (!statues.includes(i)) {
      count++;
    }
  }
  return count;
}

console.log(makeArrayConsecutive2(arr));
