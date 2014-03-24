var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name: String,
    rating: Number
})

module.exports = mongoose.model('User', userSchema)
