// 1. generate board 8x8
const blankBoard = genBoard(8);
// 2. generate 2 random cells as 'ship'
const shipCells = genRandomShips(blankBoard, 2);
// 3. update board with ship cells
const boardWithShips = addShipsToBoard(blankBoard, shipCells);
// 4. define as hot,warm,cold
const readyBoard = labelCells(boardWithShips, shipCells);

function genBoard (n) {
    // 1 parent array: 8 items. each is an array with 8 items.
  return Array(n).fill(Array(n).fill('init'));
}


// 2. generate 2 random cells as 'ship'
const shipCells = genRandomShips(blankBoard, 2);
function genRandomShips(board, n) {
    const shipCells = [];
    const getRandCoord = () => {
        const randRow = Math.floor(Math.random() * board.length);
        const randCell = Math.floor(Math.random() * board[0].length);
        return [randRow, randCell];
    }
    // TODO: good refactor opp. while loop in a for loop is not a great pattern.
    for(let i = 0; i < n; i++) {
        let randCoord = getRandCoord();
        // make sure we havent already generated that cell before
        const repeatedCoord = shipCells.find(c => (c[0] === randCoord[0] && c[1] === randCoord[1]));
        while (repeatedCoord) {
            randCoord = getRandCoord();
        }
        shipCells.push(randCoord);
    }
    return shipCells;
}

// 3. update board with ship cells
const boardWithShips = addShipsToBoard(blankBoard, shipCells);
function addShipsToBoard (board, ships) {
    return board.map((row, rowIdx) => row.map((cell, cellIdx) => {
        const isShip = ships.find(s => (s[0] === rowIdx && s[1] === cellIdx));
        return isShip ? 'ship' : cell;
    }));
}

// 4. map rows,
//      each row: map cells,
//      label each cell hot, warm or cold based on distance from 'ship' cells
/* egBoard 2x2 w/ 1 ship: 
  [
      [['ship', 'hot'], ['hot', 'warm']],
      [['hot', 'hot'], ['hot', 'warm']]
  ]
*/
const readyBoard = labelCells(boardWithShips, shipCells);
function labelCells (board, ships) {
  return board.map((row, rowIdx) => row.map((cell, cellIdx) => {
      let cellHeat;
      if(cell === 'ship') return cell;
      ships.forEach(coord => {
          const shipDistance = (coord[0] - rowIdx) + (coord[1] - cellIdx);
          if(shipDistance < 3) {
            cellHeat = 'hot';
          } else if (shipDistance < 5) {
            cellHeat = 'warm';
          } else {
            cellHeat = 'cold';
          }
      });
      return cellHeat;
  }));
}

// console.log(readyBoard);

// board ready! aka: readyBoard
// 5. handle user input:
// im not actually creating an interface yet
// pseudocode, then if time, create interface:
// 1. in browser using html, add eventlisteners to board elements.
// 2. Or could use Node's readline: https://nodejs.org/api/readline.html
/* PSEUDOCODE

    1. await user input
    2. validate that the input was within the board
    3. if valid guess, increment userGuesses counter
    4. did the user hit a ship? if yes, increment foundShips counter
    5. if not ship: return the value of the cell at that coord eg: cold, warm, hot
    6. if foundShips === 2, user wins
    7. if userGuesses === 20, user loses.
        - evaluate win before loss, so user can find the last ship on the final turn - and not lose! haha
*/

// TODO: refactor flow
// wrote these functions as I went, would a cleaner solution to have all the function calls in one place
// eg:
/*
 blankboard = initBoard();
 boardWithShips = getShips();
 readyBoard = labelBoard();
*/
// atm function calls are scattered between function definitions. Dont like that.
// thanks for the opportunity! Sorry I didnt get to capture any user input.
// I would really appreciate feedback on my solution.





// 1. generate board 8x8
const blankBoard = genBoard(8);
// 2. generate 2 random cells as 'ship'
const shipCells = genRandomShips(blankBoard, 2);
// 3. update board with ship cells
const boardWithShips = addShipsToBoard(blankBoard, shipCells);
// 4. define as hot,warm,cold
const readyBoard = labelCells(boardWithShips, shipCells);

readyBoard(addShipsToBoard(genBoard(8), genRandomShip()))