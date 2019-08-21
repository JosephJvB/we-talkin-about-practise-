try {
  throw {
    error: new Error('yeeet'),
    response: 'some nested object',
    status: 5000
  }
} catch(e) {
  console.error(e) // looks OK
  console.error(e.message) // undefined
  // weird to throw things that arent Error constructors, then you dont know what properties it might have..
}