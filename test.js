let n = 5,
  a = [4, 0, 1, -2, 3];
n = 1;
a = [9];
n = 1;
a = [-5];
function mutateTheArray(n, a) {
  let newArr = [];
  if (a.length === 1) {
    return a;
  }
  let i = 0;
  let sum = 0;
  while (i < a.length) {
    if (a[i - 1] == undefined) {
      sum = 0 + a[i] + a[i + 1];
    } else if (a[i + 1] == undefined) {
      sum = a[i - 1] + a[i] + 0;
    } else {
      sum = a[i - 1] + a[i] + a[i + 1];
    }
    newArr[i] = sum;
    sum = 0;
    i++;
  }
  return newArr;
}
// console.log(mutateTheArray(n, a));

let arr = [1, 3, 5, 6, 4, 2];
arr = [-89, -47, -38, 39, 82, 87, 40, -9, -41, -68];

function alternatingSort(a) {
  let b = [];
  let left = 0;
  let right = a.length - 1;
  while (left <= right) {
    b.push(a[left]);
    b.push(a[right]);
    left++;
    right--;
  }
  console.log(b);
}
alternatingSort(arr);
