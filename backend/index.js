const express = require('express');
const cookieParser = require('cookie-parser');
const cors=require('cors');
const passport = require('passport');
const passportLocal = require('./configs/passport-local-strategy');
const db = require('./configs/mongoose');
const session = require('express-session');
const MongoStore =require('connect-mongodb-session')(session);
const app = express();
const axios =require('axios');
const port = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json())
app.use(cors());
// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'pshiksha',
    // TODO change the secret before deployment in production mode
    secret: 'fatcat',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 10)
    },
    store: new MongoStore(
        {
            mongoUrl: 'mongodb://localhost/PSHIKSHA4' ,
            autoRemove: 'disabled'
        
        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate('session'));
//app.use(passport.setAuthenticatedUser); // session creation.
app.use('/', require('./routes'));
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
