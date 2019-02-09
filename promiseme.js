const arr = [ 1, 2, 3 ]

Promise.all(arr.map(i => {
  if(i > 2) return setTimeout(() => Promise.resolve(i), 2000)
  return []
})).then(console.log)