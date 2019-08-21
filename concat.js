const d = {
  x: [1]
};

console.log(d);
['x', 'y'].forEach(i => {
  d[i] = [].concat(d[i], 1)
})
console.log(d)