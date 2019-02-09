// YOU EVER FLATTENED AN ARRAY SON

var list = [1, 2, 3, [4], [[{x: 10}]], [[['hello']]], [[[[7]]]]]

function flattenRecursive (list) {
  var flatList = []
  list.forEach((item) => {
    item instanceof Array === true ? flatList = flatList.concat(flattenRecursive(item)) : flatList.push(item)
  })
  return flatList
}

// console.log(flattenRecursive(list))

// this is some cool code that I have found online :)
// havent really dealt with instanceOf before. Would be keen to look at it more.

// this other method does the same task but without recursion.

function flatten (list) {
  var clonedList = list.slice(0)
  var flatList = []
  while (clonedList.length) {
    var item = clonedList.shift()
    if (item instanceof Array === true) {
      clonedList = item.concat(clonedList)
    } else {
      flatList.push(item)
    }
  }
  return flatList
}
// console.log(flatten(list))

// hey Array.Shift() is pretty cool.

// CONCAT DOT APPLY
// does not work..but is close..
function annahsTest (arr) {
  const flatter = [].concat.apply([], arr)
  // console.log(flatter)
  const newArr = flatter.map(i => {
  //   // console.log(i)
    if (i instanceof Array) return annahsTest(flatter)
    else return i
  })
  return newArr
}

// console.log(annahsTest(list))


// https://twitter.com/chordbug/status/1074795869172613120
// but doesnt work for me?
const flatMAP = (fn, arr) => arr.reduce((x, y) => [...x, ...fn(y)], [])
const func = x => {
  console.log(typeof x)
  return [Number(x)] // hack here
}
// console.log(flatMAP(func, list))


const cheatinFlatten = arr => JSON.parse('[' + JSON.stringify(arr).replace(/]/gi, '').replace(/\[/gi, '') + ']')
// stringify
// remove all braces
// add string braces to start and end
// parse as json
// console.log('BEFORE:', list)
// console.log(cheatinFlatten(list))

// DING DING DING DING WE HAVE A WINNER
// one line recursion, without recursion would be another thing to look for i guess
const flatDeep = arr => Array.isArray(arr) ? arr.reduce((res, item) => res.concat(flatDeep(item)), []) : [arr]
console.log(flatDeep(list))