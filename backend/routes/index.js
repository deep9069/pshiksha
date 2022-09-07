const express = require('express');

const router = express.Router();
const RController = require('../controllers/register_control');
const files = require('../controllers/file_system');

router.get('/', RController.home);
router.get('/print',files.print);
router.use('/register', require('./register'));
router.use('/login', require('./api/login'));
router.use('/db',require('./api/blogapi'));
router.use('/test',require('./test'));
router.use('/stateapi',require('./state_api'));


// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;