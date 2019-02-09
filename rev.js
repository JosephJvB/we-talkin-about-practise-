function test () {
  let x = 0
  let y = 0
  let z = 0
  x = 1
  return (-x + y++) * ++z
  // -x: -1, y++: 0, ++z: 1
  // (-1 + 0) * 1
  // -1 * 1
  // -1
}

global.console.log(test())
// returns -1
