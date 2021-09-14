let a = [1, 2, 3],
  b = [1, 2, 3];

a = [1, 2, 3];
b = [2, 1, 3];

a = [1, 2, 2];
b = [2, 1, 1];

function areSimilar(a, b) {
  if (a.toString() === b.toString()) return true;
  let arr1 = [],
    arr2 = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      arr1.push(a[i]);
      arr2.push(b[i]);
    }
  }
  arr2 = arr2.reverse();
  if (arr1.length === 2 && arr1.toString() === arr2.toString()) {
    return true;
  }
  return false;
}

console.log(areSimilar(a, b));
