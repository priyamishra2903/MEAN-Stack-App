const express = require('express');
const UserController = require('../Controllers/User');
const Userroute = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//Routes
Userroute.get('/login', forwardAuthenticated, UserController.login);
Userroute.post('/login', UserController.loginUser);
Userroute.get('/register', forwardAuthenticated, UserController.register);
Userroute.post('/register', UserController.registerUser);
Userroute.get('/dashboard', ensureAuthenticated, UserController.dashboard);

module.exports = Userroute;