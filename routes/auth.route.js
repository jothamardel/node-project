const express = require('express');

const Route = express.Router();
const {
  handleLoginUser,
  handleRegisterUser,
  handleForgotPassword
} = require('../controllers/auth.controller');

Route.post('/login', handleLoginUser);

Route.post('/register', handleRegisterUser);

Route.post('/forgot-password', handleForgotPassword)

module.exports = Route;