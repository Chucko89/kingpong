var mongoose = require('mongoose')

var scoreSchema = mongoose.Schema({
    amount: Number
})

module.exports = mongoose.model('Score', scoreSchema)