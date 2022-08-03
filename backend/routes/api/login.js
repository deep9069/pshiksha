const express = require('express');
const router = express.Router();
const passport = require('passport');

const LController = require('../../controllers/login_control');

router.post('/', passport.authenticate('local',{failureRedirect: 'http://localhost:3000/login'}),LController.signin);

// use passport as a middleware to authenticate
// router.post('/create-session', passport.authenticate(
//     'local',
//     {failureRedirect: '/users/sign-in'},
// ), usersController.createSession);


//router.get('/sign-out', usersController.destroySession);

module.exports = router;