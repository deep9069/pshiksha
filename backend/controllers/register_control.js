const User=require('../schemas/user');
module.exports.register = function(req, res){
    // if (req.body.password != req.body.confirm_password){
    //     req.flash('error', 'Passwords do not match');
    //     return res.redirect('back');
    // }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log(err); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log(err); return}

                return res.redirect('http://localhost:3000/login');
            })
        }else{
            console.log('You have already signed up, login to continue!');
            return res.redirect('http://localhost:3000/login');
        }

    });
}
module.exports.home = function(req, res){
    res.redirect('http://localhost:3000/login');
}