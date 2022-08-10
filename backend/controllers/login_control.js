const User=require('../schemas/user');
const passport=require("passport");
const { STATES } = require('mongoose');


module.exports.signin = async function(req, res){
    return res.json(200, {
        message: 'Sign in successful!',
        STATE:req.isAuthenticated()

    });
}