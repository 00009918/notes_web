const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})

app.listen(8000, err => {
	if (err) throw err

	console.log('App is running...')
})
