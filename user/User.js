var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  display_name: String,
  email: String,
  phone: Number,
  status: String,
  address: String,
  img: String,  
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');