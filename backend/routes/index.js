const express = require('express');

const router = express.Router();
const RController = require('../controllers/register_control');

console.log('router loaded');


router.get('/', RController.home);
router.use('/register', require('./register'));
router.use('/login', require('./api/login'));
router.use('/db',require('./api/blogapi'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;