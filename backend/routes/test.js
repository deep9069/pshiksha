const express = require('express');
const router = express.Router();
const passport = require('passport');


const test = require('../controllers/login_control');


//use passport as a middleware to authenticate
//router.get('/',test.return);
router.get('/', passport.authenticate(
    'local',
    {failureRedirect: 'http://localhost:8000/'}),test.return);

//router.get('/sign-out', usersController.destroySession);

module.exports = router;