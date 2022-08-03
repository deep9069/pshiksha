const User=require('../schemas/user');
const passport=require("passport");


module.exports.signin = async function(req, res){;
    return res.json(200, {
        message: 'Sign in successful!'
    });
}