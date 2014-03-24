var mongoose = require('mongoose')

var gameSchema = mongoose.Schema({
    player1: {name: String, score: Number },
    player2: {name: String, score: Number }
})

module.exports = mongoose.model('Game', gameSchema)
