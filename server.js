const express = require('express')
const app = express()
const path = require('path')

const students = [
	{
		name: 'moe'
	},
	{
		name: 'larry'
	},
	{
		name: 'lucy'
	}
]

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
	res.send(`
		<html>
			<head>
        <title>Acme Schools</title>
        <link rel='stylesheet' href='/styles.css' />
      </head>
      <body>
        <h1>Acme Schools</h1>
        <p>Welcome to Acme Schools! Would you like to find out about our students? <a href='/students'>Students</a></p>
      </body>
		</html>
	`)
})

app.get('/students', (req, res) => {
	res.send(`
		<html>
			<head>
        <title>Acme Schools - students</title>
        <link rel='stylesheet' href='/styles.css' />
      </head>
			<body>
				<h1><a href='/'>Acme Schools</a></h1>
				<ul>
					${
						students.map(student => {
							return `
								<li>
									<a href='students/${student.name}'>
										${student.name}
									</a>
								</li>
							`
						}).join('')
					}
				</ul>
			</body>
		</html>
	`)
})

app.get('/students/:name', (req, res) => {
	const student = students.find(student => student.name === req.params.name)
	res.send(`
		<html lang='en'>
      <head>
        <title>Acme Schools - Students</title>
        <link rel='stylesheet' href='/styles.css' />
      </head>
			<body>
				<h1><a href='/'>Acme Schools</a></h1>
				<a href='/students'>All Students</a>
				<p>
					More details for ${student.name}
				</p>
			</body>
		</html>
	`)
})


const port = process.env.PROT || 8080

app.listen(port, console.log(`listening on PORT ${port}`))