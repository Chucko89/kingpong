app = require('../app')


app.get('/', function(req, res) {
	res.render('index', { title: 'King Pong' })
})

app.get('/login', function(req, res){
	res.render('login', { title: 'This is da login'})
})