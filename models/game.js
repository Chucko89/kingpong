var mongoose = require('mongoose')

var gameSchema = mongoose.Schema({
    winner: {name: String, score: Number },
    loser: {name: String, score: Number }
})

module.exports = mongoose.model('Game', gameSchema)
