var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/007', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

var connection = mongoose.connection
connection.on('open',function(){
    console.log('is running')
})
connection.on('error',function(){
    console.log('not running')
})