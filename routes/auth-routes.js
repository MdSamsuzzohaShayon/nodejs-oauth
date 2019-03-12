const express = require('express');
const router = express.Router();


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
router.get('/google', (req, res, next) => {
    // HANDLE WITH PASSPORT
    res.send('Logging in with google');
});



module.exports = router;