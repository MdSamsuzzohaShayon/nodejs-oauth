const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

//USING GOOGLE STRATEGY FOR OUR PROJECT
passport.use(
    new GoogleStrategy({
        // OPTIONS FOR STRATEGY
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }), ()=>{
        //PASSPORT CALLBACK FUNCTION
    }
)