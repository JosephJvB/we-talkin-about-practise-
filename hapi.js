const hapi = require('hapi')

const server = hapi.server({
  host: 'localhost',
  port: 4200
})

server.route({
  method: 'GET',
  path: '/test/{xss}',
  handler: function (req, h) {
    return `Hello ${req.params.xss}!`
  }
})

server.start()

/*
  i just wanted to be a slick hacker with my xss but I got nothin
  <script>alert('Hello world')</script>
*/

