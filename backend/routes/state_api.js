const express = require('express');
const router = express.Router();
const passport = require('passport');


const SController = require('../controllers/state_controller')

router.post('/', SController.state);
module.exports = router;