var app = require('../app')
var User = require('../models/user')
var Game = require('../models/game')

app.get('/', function(req, res) {
  User.find().sort({ rating: 'desc'}).exec(function(err, data){
    Game.find().limit(10).exec(function(game_err, games){
      res.render('index', { users: data, games: games})
    })
  });
})

app.post('/user', function(req, res){
  var user = new User({name: req.body.newUser, rating: 1200})
  user.save()
})

app.post('/game', function(req, res){
  var player1 = {
    name: req.body['player1'],
    score: Number(req.body['p1_score'])
  }
  var player2 = {
    name: req.body['player2'],
    score: Number(req.body['p2_score'])
  }
  if (player1.score > player2.score){
    var winner = player1;
    var loser = player2;
  } else {
    var winner = player2;
    var loser = player1;
  }

  // ELO Update
  User.findOne({name: winner.name}, function(err, winner_record){
    User.findOne({name: loser.name}, function(err, loser_record){
      var e = 100 - Math.round(1 / (1 + Math.pow(10, ((loser_record.rating - winner_record.rating) / 400))) * 100);
      console.log(e, winner_record.rating)
      winner_record.rating = winner_record.rating + e;
      winner_record.save()
      loser_record.rating = loser_record.rating - e;
      loser_record.save()
    });
  });

  // Create game record
  var game = new Game({
    winner: winner,
    loser: loser
  });

  game.save()
});