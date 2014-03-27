var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name: String,
    rating: Number,
    wins: {type: Number, default: 0},
    losses: {type: Number, default: 0}
})

module.exports = mongoose.model('User', userSchema)
