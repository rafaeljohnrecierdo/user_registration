const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  email: String,
  mobile: String,
  sex: String,
  religion: String,
  civilStatus: String,
  birthday: Date,
  birthplace: String,
  height: String,
  weight: String,
  mother: String,
  father: String,
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
