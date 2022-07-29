const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../schemas/user');


passport.use(new LocalStrategy({
    usernameField:'email'
},
    function(email,password,done){
        User.findOne({email:email},function(err,user){
            if(err){
                console.log('Error in finding user->passport');
                return done(err);
            }
            if(!user || user.password != password){
                console.log('Invalid Username or Password');
                return done(null,false);
            }
            return done(null,user);
        });
    }

));

module.exports = passport;

//serializing user to decide which key is to be kept in the cookie
passport.serializeUser(function(user,done){
    done(null,user.email);
});
//deserializing
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in finding user->passport');
            return done(err);
        }
        return done(null,user);
    });
});
module.exports=passport;