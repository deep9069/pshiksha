const express = require('express');
const router = express.Router();
const passport = require('passport');

const BController = require('../../controllers/blog_control');

router.get('/', BController.fetch);

module.exports = router;