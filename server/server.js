require('dotenv').config();
require('./db')();

const express = require('express');
const session = require('express-session');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

const auth = require('./router/auth');

app.use('/auth', auth);

app.use('/mail/send', (req, res) => {
    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GOOGLE_ID,
            pass: process.env.GOOGLE_PASS
        }
    });

    let mailOption = {
        from: process.env.GOOGLE_ID,
        to: req.body.toMail,
        subject:'내친소 TEST 메일 제목',
        text:'내친소 TEST 메일 내용'
    };

    transport.sendMail(mailOption, (error, info) => {
        if(error){
            console.log(error);
            res.json({result : 'error'})
        }
        else{
            console.log('success');
            res.json({result : 'success'})
        }
    })
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.listen(port = 5000, () => {
    console.log(`express is running on ${port}`);
})