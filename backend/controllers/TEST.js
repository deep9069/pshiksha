const passport = require('passport');
const User=require('../schemas/user');
const fxn = require("../configs/passport-local-strategy")
module.exports.return = function(req, res){
    console.log('in test',req.cookies);
    return res.json(200,{'auth': "a"});
}