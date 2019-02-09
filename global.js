const fs = require('fs')
// global.console.log(global.process.versions.tz)
// global.console.log(global.process)

let lol = global.process.config.variables

// global.console.log('cpu', pro.cpuUsage(), 'mem', pro.memoryUsage())

// global.console.log(lol.icu_data_in)

function dats () {
  fs.readFile(`${lol.icu_data_in}`, 'utf8', (err, dats) => {
    if (err) throw err
    else return dats
  })
}

global.console.log(dats())

// says file doesnt exist reeeee

// cool that I know how to make red squigglies under console.logs go away :) console is property of global object :smile:
