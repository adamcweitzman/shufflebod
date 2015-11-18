var mongoose = require('mongoose');

var workoutSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: Boolean,
  age: String,
  nationality: String,
  picture_url: String,
  book_ids: Array,
  current_location: String
});

var Workout = mongoose.model('Workout', workoutSchema);
// Make this available to our other files
module.exports = Workout;