let a = [-1, 150, 190, 170, -1, -1, 160, 180];
function sortByHeight(a) {
  let sortedArr = a;
  let index = 0;
  sortedArr = sortedArr.filter((ele) => ele !== -1).sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = sortedArr[index];
      index++;
    }
  }
  return a;
}
console.log(sortByHeight(a));
