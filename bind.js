function test () {
  return 'yes'
}

test.bind(null, 9)

console.log(test.toString())