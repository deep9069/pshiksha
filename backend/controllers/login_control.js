const User=require('../schemas/user');
const passport=require("passport");
const { STATES } = require('mongoose');


module.exports.signin = async function(req, res){
    console.log('********',req.cookies,req.isAuthenticated()
    );
    return res.json(200, {
        message: 'Sign in successful!',
        cookie:req.cookies,
        STATE:req.isAuthenticated()

    });
}