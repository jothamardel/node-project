const express = require('express');

const Route = express.Router();
const {
  handleLoginUser,
  handleRegisterUser
} = require('../controllers/auth.controller');

Route.post('/login', handleLoginUser);

Route.post('/register', handleRegisterUser);

module.exports = Route;