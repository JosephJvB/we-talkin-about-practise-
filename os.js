const os = require('os');

// what is in OS?
Object.keys(os).forEach(k => {
	if(typeof os[k] == 'function') {
		console.log(k, os[k]());
	} else {
		// console.log(os[k])
	}
})
