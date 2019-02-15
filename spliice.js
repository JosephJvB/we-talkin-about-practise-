const arr = [1, 2, 3]

// args: index to insert, bool: replace or insert new, thing(s) to insert
arr.splice(1, 0, 'new!')
arr.splice(1, 1, 'replace!')
// can insert muliple items!
arr.splice(1, 0, ...arr)
arr.splice(1, 0, 9, 8, 7, 6, 5)

// console.log(arr)

// I need: arr.splice(3, 0, ' '); arr.splice(7, 0, ' ')

const str = 'joevanbo'
const a = str.split('')
a.splice(3, 0, ' ')
a.splice(7, 0, ' ')
// console.log(a.join(''))

//1. shuffle array forward one 
//2. splice spaces in at those indexes
//3. apply array to letters
//4. profit?

for(let j = 0; j < 5; j++) {
  const cols = [1, 2, 3, 4]
  const offset = j

  let next = []

  for(let i = 0; i < cols.length; i++) {
    const n = i - offset < 0 ? cols.length + (i - offset) : i - offset
    next.push(cols[n])
  }
  console.log(next)
}

