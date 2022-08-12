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
            if(!user || user.password!=password){
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
    done(null,user.email);
});
//deserializing
passport.deserializeUser(function(email,done){
    User.findOne({email:email},function(err,user){
        if(err){
            console.log('Error in finding user->passport');
            return done(err);
        }
        //
        
        //console.log('deserialize',user);
        return done(null,user);
    });
});
passport.checkAuthentication = function(req, res, next){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if (req.isAuthenticated()){
        return next();
    }

    // if the user is not signed in
    return res.redirect('http://localhost:3000/login');
}

passport.setAuthenticatedUser = function(req, res, next){
    if (req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views
        res.locals.user = req.user;
        console.log(req.user);
    }

    next();
}
module.exports=passport;