var express = require('express')

var app = express()

app.route('/')
.get(function(req, res) {
	res.send(200, process.env.GREETING+', '+(req.query.who ? req.query.who+'!' : 'stranger..'))
})

app.listen(process.env.PORT, function() {
	console.log('Listening on '+process.env.PORT)
})
