const User=require('../schemas/user');
const passport=require("passport");
const { STATES } = require('mongoose');
module.exports.state = async function(req, res){
    console.log(req.body);
    return;
}