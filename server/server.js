const express = require('express');
const db = require('./db');

const passport = require('passport');
const session = require('express-session');

const app = express();
db();

// 임시 작성
app.use(express.json());

app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결

require('./passport');

//임시 작성
app.use('/test', async (req, res) => {
    Test.find({}).then((data) => res.json({ username: data[0].name }));
});

app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }),
    function (req, res) {
        console.log('success');
        res.redirect('/');
    });



app.listen(port = 5000, () => {
    console.log(`express is running on ${port}`);
})