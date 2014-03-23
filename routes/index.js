app = require('../app')


app.get('/', function(req, res) {
	res.render('index')
})

app.get('/login', function(req, res){
	res.render('login', { title: 'This is da login'})
})