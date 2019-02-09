const fs = require('fs')

test()
  .then(files => files.forEach(f => console.log(f)))
  .catch(err => console.log(err))

function test () {
  return new Promise((resolve, reject) => {
    fs.readdir('./', (err, files) => {
      if (err) reject(new Error('LUL'))
      else resolve(files)
    })
  })
}

// OOOOOO POGCHAMP IT WORKS!

// so this would be a really good way of making the info returned from fs functions available in readline for my QuakeCapper :smile:

// thenTest()
//   .then(res => console.log(res))

function thenTest () {
  return 'HELLO'
}
// DOESNT WORK
// does not work I think .then and .catch can only be used after a promise has been resolved / rejected.
// that fileSystemExtention must have it built in. since fs does not i would have to write it out...which I have no real practise doing lul. Would be keen as to try tho
