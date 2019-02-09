const fs = require('fs')

thenTest()

function thenTest () {
  fs.readFile(`../Poke-Match/server/pokeScrape/pokeLibrary/kantoDex.json`, 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      let mans = obj.func(data)
      let man = mans.find(man => man.includes('Mew.'))
      fs.writeFile(`${__dirname}/whyDotThen.txt`, JSON.stringify(man), (err) => {
        if (err) console.log(err)
        else console.log('mans:', mans[mans.length - 1])
      })
    }
  })
}

const obj = { func: (data) => {
  return JSON.parse(data)
}
}

// still havent found out why that then works im just a bad kid

// function saveMons(idx) {
//   fs.readFile(`${__dirname}/pokeLibrary/hoennDex.json`, 'utf8', (err, data) => {
//     if (err) {
//       console.log(err)
//     } else {
//       let mons = JSON.parse(data)
//       let searchMon = hoennArr[idx]
//       if (!searchMon) return console.log('You are the pokemon master!')
//       let findMon = exists(searchMon)
//       let pokeAlreadyCaught = mons.find(p => p.includes(findMon))
//       if (pokeAlreadyCaught) return saveMons(idx + 1)
//       console.log('-------')
//       console.log('gonna catch a ', searchMon)
//       scrape(searchMon)
//         .then(res => { // WHY DOES THIS .then() WORK LOL
//           mons.push(res)
//           fs.writeFile(`${__dirname}/pokeLibrary/hoennDex.json`, JSON.stringify(mons), (err) => {
//             if (err) console.log(err)
//             else console.log(searchMon, ' was caught!')
//           })
//           saveMons(idx + 1)
//         })
//     }
//   })
// }
