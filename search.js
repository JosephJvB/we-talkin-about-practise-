// const { filter, includes } = require('lodash')

const { log } = global.console

const searcher = (list, query) => {
  if (!query) return list // so this is tricky, one instance wants to have the whole list rendering before a search, the other instance wants there to be nothing rendered before a search is entered.
  const search = list.filter(item => {
    // assumes that item is an object and creates an array of its properties.
    const itemValues = Object.values(item)
    // search the generated array of item values for a value that matches the query
    // if a value matches the query, return the item
    return itemValues.find(value => matcher(value, query))
    // I could use lodash to iterate across the object rather than doing Object.values...?
  })
  // the filter will return an array of items with values that matched the query
  // if no match is found on any item, a blank array will be returned
  return search
}

function matcher (property, query) {
  const prop = property.toString()
  // log(property)
  return prop && query && prop.toLowerCase().includes(query.toLowerCase())
}

const array = [{id: 1, name: 'hi'}, {id: 2, name: 'butts'}, {id: 3, name: 'joe'}]

log(searcher(array, 'LOL'))

// test this function on Don's BNZ test test it with lodash too
// lodash will mean that I dont have to do the Object.values.
// do a LODASH FIND™ on each item from the filter. :)
