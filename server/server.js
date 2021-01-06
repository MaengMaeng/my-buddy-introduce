require('dotenv').config();
require('./db')();

const express = require('express');
const session = require('express-session');

const app = express();
app.use(express.json());

const auth = require('./router/auth');

app.use('/auth', auth);

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.listen(port = 5000, () => {
    console.log(`express is running on ${port}`);
})