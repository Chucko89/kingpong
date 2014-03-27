exports.init = function(){
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://charlie:kiss@oceanic.mongohq.com:10051/kingpong');

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function callback () {
    console.log("Connected to database")
  });

  return mongoose;
}
