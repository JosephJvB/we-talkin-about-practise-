const o = {
  x: 1,
};

['x', 'y'].forEach(i => {
  if(i in o) {
    o[i]++;
  } else {
    o[i] = 1;
  }
})

console.log(o)