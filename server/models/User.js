const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: String,
  username: String,
  image:String,
  email:String,
  social:Array,
});

userSchema.static.findBySocialId = (id, social) => {
  console.log('findBySocialId');
  return this.findOne({'social' : { $elemMatch: { id, social }}}).exec();
};

userSchema.static.findByEmail = (email) => {
  console.log('findByEmail');
  return this.findOne({email}).exec();
};

userSchema.static.createUser = (profile, social) => {
  console.log('createUser');
  return new this({
    ...profile,
    social:[social]
  })
}

module.exports = mongoose.model('User', userSchema);