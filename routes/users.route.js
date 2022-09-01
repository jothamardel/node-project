const express = require('express');
const Route = express.Router();
const { handleUsers } = require('../controllers/users.controller')


Route.get('/users', handleUsers);


module.exports = Route;