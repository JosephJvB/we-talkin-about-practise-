const readline = require('readline')

function create () {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
}

begin()

function begin () {
  console.log('')
  const rl = create()
  rl.question('howdy there pardner', (answer) => {
    console.log('')
    rl.close()
    if (answer === 'hi') return console.log(answer, 'welcome friend')
    if (answer === 'bye') return console.log(answer, 'take care out there')
    else console.log('wots a', answer, 'mate')
  })
}

// dunno how to get the user typing on a new line lol
