const init = [1, 2, 3]
// WILL MUTATE
const res = init // reference initial array
// ARE CLONES NO MUTATE
const copy = [].concat(init)
const ncopy = [...init]
// clone to break reference to first object

res.push('new item') // also pushes into init array bcos object reference
// copy.push('new item')

console.log(
  'init', init, // [1, 2, 3, 'new item']
  '\nres', res, // [1, 2, 3, 'new item']
  '\ncopy', copy, // [1, 2, 3] dont mutate cos are CLONES
  '\nncopy', ncopy // [1, 2, 3] dont mutate cos are CLONES
)

// pushing into a referenced array also changes the referenced array
// that's weird? I think that's weird