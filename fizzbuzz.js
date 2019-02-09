for (let n = 1; n <= 100; n++) {
  let out = ''
  if (n % 5 === 0) out += 'fizz'
  if (n % 3 === 0) out += 'buzz'
  console.log(out || n)
}
