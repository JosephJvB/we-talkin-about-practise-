const fetch = require('node-fetch');

// https://github.com/dropbox/dropbox-sdk-js/blob/master/src/upload-request.js

litFetch('http://localhost:3000/test')
.then(console.log)
.catch(console.error)

function litFetch(url, opts) {
  return fetch(url, opts)
  .then(parseType)
  .then(({res, data}) => {
    if(!res.ok) {
      console.log('error!')
      throw {
        message: 'Request failed',
        status: res.status
      };
    }
  })
}

function parseType (res) {
  const clone = res.clone();
  return new Promise((resolve, reject) => {
    // try json
    res.json()
    .then(d => resolve(d))
    .catch(() => {
      // if that fails, try text
     return clone.text().then(d => resolve(d))
    })
  })
  .then(data => ({res, data}))
}