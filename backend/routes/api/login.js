const express = require('express');
const router = express.Router();
const passport = require('passport');

const LController = require('../../controllers/login_control');

//use passport as a middleware to authenticate
router.post('/', passport.authenticate(
    'local',
    {failureRedirect: 'http://localhost:3000/login'},
), LController.signin);
router.get('/test', passport.authenticate(
    'local',
    {failureRedirect: 'http://localhost:8000/'}),LController.return);


//router.get('/sign-out', usersController.destroySession);

module.exports = router;