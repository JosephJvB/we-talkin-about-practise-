// ok this works but is defos not the best way to do it. I wonder what is
function makeBoard (len, numMines) {
  let board = initBoard(len)
  board = addMines(board, numMines)
  board = shuffle(board)
  board = addNumbers(board)
  console.log(board)
  return board
}

makeBoard(5, 8)

// FUNCTIONS

// https://stackoverflow.com/questions/4852017/how-to-initialize-an-arrays-length-in-javascript
function initBoard(n) {
  return Array(Number(n)).fill(
    Array(Number(n)).fill(0)
  )
}

// https://stackoverflow.com/questions/20190110/2d-int-array-shuffle
function shuffle (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for(let j = arr[i].length - 1;j > 0; j--) {
      let x = Math.floor(Math.random() * (i + 1))
      let y = Math.floor(Math.random() * (i + 1))
      let temp = arr[i][j]
      arr[i][j] = arr[x][y]
      arr[x][y] = temp
    }
  }
  return arr
}

function addMines (arr, numMines) {
  return arr.map((r, i) => {
    return r.map((t, j)=> {
      let tileNumber = (i * arr.length + 1 + j) // calculate offset
      if(tileNumber <= numMines) {
        return 1 // if I can set this to 'M' off the bat
      } else {
        return 0
      }
    })
  })
}

function addNumbers(arr) {
  // will prevent this
  // save mine coords
  const mineCoords = []
  arr.forEach((row, i) => {
    if(row.includes(1)) {
      row.forEach((t, j) => {
        if(t === 1) mineCoords.push([i, j])
      })
    }
  })

  // return arr
  // calc numbers on clean tiles
  const board = arr.map((row, i) => row.map((t, j) => {
    const upIsmine = i > 0 ? arr[i - 1][j] : 0
    const downIsMine = i < arr.length - 1 ? arr[i + 1][j] : 0
    const leftIsMine = j > 0 ? row[j - 1] : 0
    const rightIsMine = j < row.length - 1 ? row[j + 1] : 0
    return Number(upIsmine + rightIsMine + downIsMine + leftIsMine)
  }))
  // and this
  // add mines back
  mineCoords.forEach(coord => {
    const r = coord[0]
    const t = coord[1]
    board[r][t] = 'M'
  })
  return board
}