let inputArray = ['aba', 'aa', 'ad', 'vcd', 'aba'];
inputArray = ['abc', 'eeee', 'abcd', 'dcd'];

function allLongestStrings(inputArray) {
  let longestStr = inputArray[0].length;
  for (let i = 1; i < inputArray.length; i++) {
    if (longestStr < inputArray[i].length) {
      longestStr = inputArray[i].length;
    }
  }
  inputArray = inputArray.filter((val) => val.length === longestStr);
  return inputArray;
}

console.log(allLongestStrings(inputArray));
