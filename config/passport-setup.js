const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

//USING GOOGLE STRATEGY FOR OUR PROJECT
passport.use(
    new GoogleStrategy({
        // OPTIONS FOR STRATEGY
    }), ()=>{
        //PASSPORT CALLBACK FUNCTION
    }
)