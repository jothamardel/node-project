const mongoose = require('mongoose');

const { Schema, model } = mongoose;


const userSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  }
})

module.exports = model('user', userSchema);

// CRUD - Create, Read, Update, Delete