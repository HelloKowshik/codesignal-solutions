let s1 = 'aabcc',
  s2 = 'adcaa';

function commonCharacterCount(s1, s2) {
  let count = 0;
  s1 = s1.split('');
  s2 = s2.split('');
  s1.forEach((str) => {
    if (s2.includes(str)) {
      count++;
      s2.splice(s2.indexOf(str), 1);
    }
  });
  return count;
}

console.log(commonCharacterCount(s1, s2));
