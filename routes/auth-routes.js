const express = require('express');
const router = express.Router();
const passport = require('passport');


//AUTH
router.get('/login', (req, res) => {
    res.render('login');
});


// AUTH LOGOUT
router.get('/logout', (req, res, next) => {
    // HANDLE WITH PASSPORT
    res.send('Logging out');
});





// AUTH WITH GOOGLE
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));



//CALLBACK ROUTE FOR GOOGLE TO REDIRECT TO
router.get('/google/redirect', passport.authenticate('google') , (req, res, next) => {
    res.send("You reach a call back uri");
});



module.exports = router;