// transform each item
function joeMap(collection, callback) {
  const result = []
  for (let i = 0; i < collection.length; i++) {
    const newItem = callback(collection[i])
    result.push(newItem)
  }
  console.log('MAP RESULT:', result)
  return result
}

// return item only if it meets callback condition
function joeFilter(collection, callback) {
  const result = []
  for (let item of collection) {
    const newItem = callback(item)
    if (Boolean(newItem)) {
      result.push(item)
    }
  }
  console.log('FILTER RESULT:', result)
  return result
}

// return first item that meets callback condition
function joeFind(collection, callback) {
  for (let item of collection) {
    const match = callback(item)
    if (Boolean(match)) {
      console.log('MATCH:', item)
      return item
    }
  }
}

// joe 18/12/18: I dont know if this will exit the forloop?
// const test = joeFind([1, 2, 3], (i) => i > 1)
// console.log(test)
// ok it does, nice