let inputString = 'aabb';
inputString = 'zyyzzzzz';
// inputString = 'zaa';

function palindromeRearranging(inputString) {
  const charObj = {};
  let count = 0;
  inputString.split('').reduce((acc, curr) => {
    if (charObj[curr]) {
      charObj[curr]++;
    } else {
      charObj[curr] = 1;
    }
    return charObj;
  }, {});
  for (let val in charObj) {
    if (charObj[val] % 2 !== 0) {
      count++;
    }
  }
  return count > 1 ? false : true;
}

console.log(palindromeRearranging(inputString));
