const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

//USING GOOGLE STRATEGY FOR OUR PROJECT
passport.use(
    new GoogleStrategy({
        // OPTIONS FOR STRATEGY
        callbackURL: '/auth/google/redirect', // FOR THIS TIME WE DON'T NEED TO SET LOCALHOST:PORT IT AUTOMITICALLY KNOWS WHERE IT IS
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, ( accessToken, refreshToken, profile, done)=>{
        //PASSPORT CALLBACK FUNCTION
        // WHEN WE ALLOW WITH GOOGLE THIS FUNCTION FILL BE CALLED
        console.log('Passport callback function');
        console.log(profile);
    })
)