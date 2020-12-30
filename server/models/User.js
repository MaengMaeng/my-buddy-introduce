const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  username: String,
  email:String,
  usertype:String,
});

module.exports = mongoose.model('User', userSchema);