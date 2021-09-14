let a = [50, 60, 60, 45, 70];
a = [100, 51, 50, 100];
a = [80];
function alternatingSums(a) {
  let sum1 = 0,
    sum2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) sum1 += a[i];
    else sum2 += a[i];
  }
  return [sum1, sum2];
}
console.log(alternatingSums(a));
