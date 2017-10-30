var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  display_name: String,
  email: String,
  phone: Number,
  status: Boolean,
  address: string
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');