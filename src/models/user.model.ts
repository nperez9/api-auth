const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, max: 255 },
  email: { type: String, required: true, max: 255 },
  password: { type: String, required: true, max: 1024 },
  date: { type: Date, default: Date.now },
});

const userModel = mongoose.model('user', userSchema, 'users');

export default userModel;