const express = require('express');
const helmet = require('helmet');
const path = require('path');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.static(path.join(__dirname, 'public')));

// contrived
server.get('/hello-world', (req, res) => {
  const name = req.query.name || 'world';
  const response = `hello ${name}`;
  res.status(200).send(response);
});

// test bad response
server.get('/test', (req, res) => {
  res.status(400).json({testData: true});
});

// try json in url params cos why not?
server.get('/json/:json', (req, res) => {
  if(!req.params.json) {
    res.sendStatus(400);
    return;
  }

//  {"testData": true}
  const j = JSON.parse(req.params.json);
  res.status(200).send(j);

  return
})

// all valid ways of getting request headers
server.get('/headers', (req, res) => {
  const x = req.header('host');
  const y = req.get('host');
  const z = req.headers['host']; // req.headers.host

  console.log(`
  x: ${x}
  y: ${y}
  z: ${z}
  `);

  res.sendStatus(200);
});

server.use('*', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

server.use((err, req, res, next) => {
  // log all errors
  console.error(`
    Express caught error:
    ${err}
    ---
  `)
  // respond 500 if no response given
  if(!res.headersSent) {
    res.status(500).send(err);
  }
});

const port = process.env.PORT || 3000;
const serverInstance = server.listen(port, () => console.log(`Server up on ${port}`));

// i dunno what the overlap is between this and the express error middleware.
// ie: if I have that error route, is it possible for errors to go unhandled?
process.on('unhandledException', err => {
  console.error(`
    Express closing on uncaught error:
    ${err}
    ---
  `)
  serverInstance.close(() => process.exit(1));
})