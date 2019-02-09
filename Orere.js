const { Z_ASCII } = require('zlib')

// TIME TO DO SOME CONSOLE DOT LOGS G
const fs = require('fs')

const repoArr = ['Poke-Match', 'ISS-Tracker', 'BloggerNodeJS', 'Easily_Distribute_Assignments', 'JoePro2.0', 'sk-imports-exports', 'maximax', 'Flicksync']

readPractise(0)

function readPractise (idx) {
  let nextRepo = repoArr[idx]
  if (!nextRepo) return console.log('that\'s all folks')
  fs.readFile(`../../Workspace/${nextRepo}/package.json`, 'utf8', (err, data) => {
    if (err) console.log(err)
    else {
      console.log(nextRepo + ':', heresTheData(data))
    }
  })
  readPractise(idx + 1)
}

function heresTheData (data) {
  let pack = JSON.parse(data)
  console.log('#----------------#')
  return pack.scripts
}

// why did my .then work on pokematcher savemons but not here? hard to say. cos it was inside the callback inside readfile! must be why yeah idk why tho LOL rekt son

// Ok so it would be cool do do more arty things on the command line. I'd like to figure out ways to draw some shitty pictures :)

function asciiTest () {
  return Z_ASCII
}

// console.log(asciiTest())
