const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  email: String,
  mobile: String,
  sex: String,
  birthday: Date,
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
