const express = require('express');
const cookieParser = require('cookie-parser');
const cors=require('cors');
const app = express();
const port = 8000;
//const expressLayouts = require('express-ejs-layouts');
const db = require('./configs/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./configs/passport-local-strategy');
const MongoStore = require('connect-mongo');
const axios =require('axios');
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'pshiksha4.0',
    // TODO change the secret before deployment in production mode
    secret: 'codeial',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 60 * 24 * 30)
    },
    store: MongoStore.create({ mongoUrl:'mongodb://localhost/PSHIKSHA4'}),autoRemove:'disabled'
    // store: new MongoStore(
    //     {
    //         mongooseConnection: db,
    //         autoRemove: 'disabled'
        
    //     },
    //     function(err){
    //         console.log(err ||  'connect-mongodb setup ok');
    //     }
    // )
}));
app.use(passport.initialize());
app.use(passport.session());
passport.setAuthenticatedUser;
app.use('/', require('./routes'));
//console.log('session created 5!');

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
