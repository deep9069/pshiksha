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
            if(!user || !user.password==password){
                console.log('Invalid Username or Password');
                return done(null,false);
            }
            console.log('user found !')
            console.log(user);
            return done(null,user);
        });
    }

));


//serializing user to decide which key is to be kept in the cookie
passport.serializeUser(function(user,done){
    //console.log('serialize',user);
    done(null,user.id);
});
//deserializing
passport.deserializeUser(function(id,done){
    User.findOne({id:id},function(err,user){
        if(err){
            console.log('Error in finding user->passport');
            return done(err);
        }
        //
        
        //console.log('deserialize',user);
        return done(null,user);
    });
});
module.exports=passport;