const User=require('../schemas/user');
const passport=require("passport");
const { STATES } = require('mongoose');
const axios=require('axios');

module.exports.signin = async function(req, res){
    console.log('****',req.isAuthenticated(),req.session.passport.user);
    var signed=true;
    axios.post("http://localhost:8000/stateapi",{state:true})
    .catch(error=>{console.log(error);})
    return res.json(200, {
        message: `${req.session.passport.user},You Have Successfully Signed In !`,
    });
}