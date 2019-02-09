// this is joe's home grown, made, refactored, refactored, stolen, refactored

function makeChessToImpress (size) {
  let board = ''
  // print a row for each integer. (0 -> size)
  for (var h = 0; h < size; h++) board += makeRow(size, h)
  return board
}

function makeRow (width, height) {
  let row = ''
  // print a character for each integer. (0 -> size)
  for (var w = 0; w < width; w++) {
    // MAGIC ROW :o
    if ((w + height) % 2 === 0) row += '#'
    else row += ' '
  }
  return row + '\n'
}
// global.console.log(makeChessToImpress(7))

// this is refactored stolen version

function reChessed (size) {
  let board = ''
  // make board
  for (var i = 0; i < size; i++) {
    // make row
    for (var j = 0; j < size; j++) {
      // MAGIC ROW :o smart row logic
      if ((i + j) % 2 === 0) board += '#'
      else board += ' '
    }
    board += '\n'
  }
  return board
}
// global.console.log(reChessed(7))
