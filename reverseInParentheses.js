let inputString = 'foo(bar)baz';
inputString = 'foo(bar)baz(blim)';
inputString = 'foo(bar(baz))blim';

function reverseInParentheses(inputString) {
  if (inputString.includes('(')) {
    return reverseInParentheses(reverseStr(inputString));
  }
  return inputString;
}
function reverseStr(s) {
  let regex = /\(([^()]*)\)/i;
  let subString = regex.exec(s)[1];
  subString = subString.split('').reverse().join('');
  return s.replace(regex, subString);
}

console.log(reverseInParentheses(inputString));
