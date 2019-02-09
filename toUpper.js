// THE BEST ITERATIONS ARE AT THE BOTTOM OF THE PAGE :)

function upps (str) {
  const firstUp = str.split('').shift().toUpperCase()
  const len = str.split('').length
  const rest = str.slice(1, len)
  return firstUp.concat(rest)
}

// console.log(upps('heyyy'))
// console.log(upps('wow this works?'))

function allWordsUp (str) {
  const wordArr = str.split(' ')
  const upArr = wordArr.map(word => word.split('').shift().toUpperCase())
  const len = (word) => word.split('').length
  const final = wordArr.map((word, i) => upArr[i].concat(word.slice(1, len(word))))
  return final.join(' ')
}

// console.log(allWordsUp('hi im joe'))
// console.log(allWordsUp('heywasgooodBABY'))
// console.log(allWordsUp('hey-whats-up tHO'))

// for (let i = 0; i < wordArr.length; i++) {
//   console.log(wordArr[i].split('').shift().toUpperCase())
// }

// const final = wordArr.map((word, i) => upArr[i].concat(word.slice(1, word.split('').length)))

function firstUp (str) {
  const strArr = str.split('')
  const final = strArr.map(l => {
    if (l === strArr[0]) return l.toUpperCase()
    else return l
  })
  return final.join('')
}

// console.log(firstUp('sup im joe'))

function allUp (str) {
  const strArr = str.split(' ')
  const final = strArr.map(word => firstUp(word))
  return final.join(' ')
}

// console.log(allUp('hi im joe'))

function typeO (str) {
  return typeof str[2]
}

// console.log(typeO('hi im joe'))

function strSliceTest (str) {
  return str[0].toUpperCase() + str.slice(1, str.length)
  // this is basically mischa's code except instead of substring I have used slice
}

// console.log(strTest('hi im joe'))
// console.log(strTest('sassy'))

function replaceTest (str) {
  return str.replace(str[0], str[0].toUpperCase())
}
// doesnt just replace all instances of the letter that str[0] refers to. very nice
// console.log(replaceTest('heyhey'))
// console.log(replaceTest('hey hey'))
// console.log(replaceTest('sassy'))
