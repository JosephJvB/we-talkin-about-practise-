function makeLeaderBoard (scores) {
  const players = []
  scores.forEach(score => {
    const foundPlayer = players.find(player => player.id === score.id)
    if (foundPlayer) foundPlayer.rounds.push(score.score)
    else {
      const playerEdit = Object.assign({}, score)
      delete playerEdit.score // maybe this works it would definitely need some console.logging first
      playerEdit.rounds = [score.score]
      return players.push(playerEdit)
    }
  })
  console.log('this is players: ', players)
  return players
}

function objtest () {
  const obj = { name: 'joe', age: 24 }
  const newObj = Object.assign({}, obj)
  delete newObj.age // delete does work wowee
  return newObj
}
// console.log(objtest())

// this still returns a blank object, but it has the property on it -> somewhere up the prototypal chain???
function noconfig () {
  const obj = {}
  Object.defineProperty(obj, 'anime', { value: 'isfornerds' })
  return obj
}
// console.log(noconfig())

function props () {
  const obj = {}
  Object.defineProperties(obj, {
    sports: { value: 'cool' },
    videogames: { value: 'lame' }
  })
  return `joe is ${obj.sports}, he's not ${obj.videogames}`
}
// console.log(props())

function arrTest () {
  const arr = [1, 2, 3, 4]
  delete arr[0] // empty item?? lul Keeps arr the same length, but no value at arr[0]
  return arr
}
// console.log(arrTest())

// function makeLeaderBoard (scores) {
//   const players = []
//   scores.forEach(score => {
//     const foundPlayer = players.find(player => player.id === score.id)
//     if (foundPlayer) foundPlayer.rounds.push(score.score)
//     else {
//       const playerEdit = {
//         id: score.id,
//         name: score.name,
//         icon: score.icon,
//         rounds: [score.score]
//       }
//       return players.push(playerEdit)
//     }
//   })
//   console.log('this is players: ', players)
//   return players
// }

// Old code is below. I was doing some wack stuff with Object.assign...
// OK I SEE WHAT I WAS DOING: the obj.assign only gets called when foundplayer DOESNT exist, so Im trying to create an object with properties that dont exist..
// if I change foundPlayer to score...? I think maybe that would do the trick. but I'm also pretty sure that the solution above works too. God I'm a kook

// this is what I was basically doing... dingus.
function oldBadCode () {
  const newObj = Object.assign({}, false)
  newObj.prop = 24
  return newObj
}

// console.log(oldBadCode())

// function makeLeaderBoard(scores) {
//   const players = []
//   scores.forEach(score => {
//     const foundPlayer = players.find(player => player.id === score.id)
//     if (foundPlayer) {
//       foundPlayer.rounds.push(score.score)
//     } else {
//       const playerEdit = Object.assign({}, foundPlayer)
//       playerEdit.id = score.id
//       playerEdit.name = score.name
//       playerEdit.icon = score.icon
//       playerEdit.rounds = [score.score]
//       return players.push(playerEdit)
//     }
//   })
//   console.log('this is players: ', players)
//   return players
// }
