const User=require('../schemas/user');
const passport=require("passport");
const { STATES } = require('mongoose');


module.exports.signin = async function(req, res){
    console.log('****',req.isAuthenticated(),req.session.passport.user);
    return res.json(200, {
        message: `Sign in successful! : ${req.session.passport.user}`,
        STATE:req.isAuthenticated()

    });
}
module.exports.return = function(req, res){
    console.log('in test',req.isAuthenticated(),req.user.email);
    return res.json(200,{'auth': req.isAuthenticated()});
}