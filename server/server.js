require('dotenv').config();
require('./db')();

const express = require('express');

const passport = require('passport');
const session = require('express-session');

const app = express();

app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

require('./passport');

app.get('/',(req, res) => {
    res.json(req.session.passport.user);
})

app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
    });

app.listen(port = 5000, () => {
    console.log(`express is running on ${port}`);
})