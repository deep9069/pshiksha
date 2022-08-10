const express = require('express');
const router = express.Router();
const passport = require('passport');


const test = require('../controllers/TEST');


//use passport as a middleware to authenticate
router.get('/',test.return);


//router.get('/sign-out', usersController.destroySession);

module.exports = router;