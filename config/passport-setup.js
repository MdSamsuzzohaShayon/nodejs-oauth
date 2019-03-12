const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

//USING GOOGLE STRATEGY FOR OUR PROJECT
passport.use(
    new GoogleStrategy({
        // OPTIONS FOR STRATEGY
        clientID: '152144424568-7nl1rfee8eji9sll8siokdsflancdg87.apps.googleusercontent.com',
        clientSecret: 'Ifg4g3p7cY45PX7WeZYDAbLi'
    }), ()=>{
        //PASSPORT CALLBACK FUNCTION
    }
)