function persistence(num) {
  let loops = 0;
  let strNum = num.toString();
  while (strNum.length > 1) {
    strNum = strNum.split('')
    .reduce((tot, n) => {
      return n * tot;
    }, 1)
    .toString();

    loops++;
  }

  return loops;
}

console.log(persistence(39))
// console.log(persistence(4))
// console.log(persistence(25))