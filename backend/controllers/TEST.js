const User=require('../schemas/user');
module.exports.return = function(req, res){
    console.log('in test',req.isAuthenticated(),req.cookies);
     return res.json(200,{'cookies': req.cookies});
}