const express = require('express');
const authRoute= require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');


const app = express();

app.set('view engine', 'ejs');


app.use('/auth', authRoute);

app.get('/',(req, res, next)=>{
    res.render('home');
});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log('running server');
});