let num = 1230;
num = 239017;

function isLucky(n) {
  n = n.toString();
  let x = [...n.slice(0, n.length / 2)].reduce((a, b) => a + parseInt(b), 0);
  let y = [...n.slice(n.length / 2, n.length)].reduce(
    (a, b) => a + parseInt(b),
    0
  );
  return x === y;
}

console.log(isLucky(num));
