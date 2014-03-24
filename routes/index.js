var app = require('../app')
var User = require('../models/user')

app.get('/', function(req, res) {
  var userRating = User.find(function(err,data){
    res.render('index', { users: data })
  })
})

app.post('/user', function(req, res){
  var user = new User({name: req.body.newUser, rating: 1200})
  user.save()
  console.log(user)
})