const list = [1, 2, 3, 4, 5, 6]

function feTest (arr) {
  let newList = []
  arr.forEach(i => newList.push(i))
  return newList
}

// console.log(feTest(list))

function mapper (arr) {
  console.log(arr.map(i => i))
}

mapper(list)

// forEach is for executing a function on each item of an array, map is the best way to return an array. I think that's fair.
