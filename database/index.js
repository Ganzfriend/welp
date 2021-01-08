// initialize database here
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/choices', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("we are connected");
});

// Connect Mongoose to our local MongoDB via URI specified above and export it below

// Register the schema with Mongoose as the 'Choice' collection.
const choiceSchema = mongoose.Schema({name: String});
const Choice = mongoose.model('Choice', choiceSchema);

module.export = {db, Choice};