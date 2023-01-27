const fs = require('fs')

fs.readFile('scores.js', (err, result) => {
	if(err) {
		console.log('err', err)
	} else {
		const rows = result.toString().trim().split('\n')
		const data = {}
		rows.forEach(row => {
			const parts = row.split(',');
      const name = parts[0];
			data[name] = parts.slice(1).reduce((a,b) => a + b*1, 0) / (parts.length - 1)
		});
	console.log(data)
	}
})