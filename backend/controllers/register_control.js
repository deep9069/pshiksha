const User=require('../schemas/user');
module.exports.register = function(req, res){

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log(err); return ;}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log(err); return;}

                return;
            })
        }else{
            console.log('You have already signed up, login to continue!');
            return;
        }

    });
}
module.exports.home = function(req, res){
    console.log('Frontend Home');
    return;
}