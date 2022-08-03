const express = require('express');
const router = express.Router();
const passport = require('passport');


const RController = require('../controllers/register_control');

router.post('/', RController.register);

// use passport as a middleware to authenticate
// router.post('/create-session', passport.authenticate(
//     'local',
//     {failureRedirect: '/users/sign-in'},
// ), usersController.createSession);


//router.get('/sign-out', usersController.destroySession);

module.exports = router;