function testDumbIdiot (toddies) {
  return new Promise((gooden, badder) => setTimeout(() => gooden(toddies), 10000))
}

testDumbIdiot('eeeYUP')
// .then(console.log)
.then((res) = console.log(res))