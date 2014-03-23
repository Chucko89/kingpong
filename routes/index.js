var app = require('../app')
var User = require('../models/user')
var Score = require('../models/score')

app.get('/', function(req, res) {
	res.render('index')
})