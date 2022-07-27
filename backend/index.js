const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
//const expressLayouts = require('express-ejs-layouts');
const db = require('./configs/mongoose');
// used for session cookie
const session = require('express-session');
const passport = require('passport');
//const passportLocal = require('./config/passport-local-strategy');
const passportJWT = require('./configs/passport-jwt-strategy');
const MongoStore = require('connect-mongo');
const axios =require('axios');
// const sassMiddleware = require('node-sass-middleware');
// const flash = require('connect-flash');
// const customMware = require('./config/middleware');


// app.use(sassMiddleware({
//     src: './assets/scss',
//     dest: './assets/css',
//     debug: true,
//     outputStyle: 'extended',
//     prefix: '/css'
// }));
app.use(express.urlencoded());

app.use(cookieParser());






// set up the view engine

// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    // TODO change the secret before deployment in production mode
    secret: 'codeial',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 5)
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
//console.log('session created 1!');
app.use(passport.initialize());
//console.log('session created 2!');
app.use(passport.session());
//console.log('session created 3!');

passport.setAuthenticatedUser;
//console.log('session created 4!');
// app.use(flash());
// app.use(customMware.setFlash);

// // use express router
app.use('/', require('./routes'));
//console.log('session created 5!');

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
