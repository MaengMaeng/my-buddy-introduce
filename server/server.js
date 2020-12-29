const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const db = require('./db');
db();

// 임시 작성
const Test = require('./models/Test');

app.use(express.json());

//임시 작성
app.use('/test', async(req, res)=> {
    Test.find({}).then((data) => res.json({username:data[0].name}));
});

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})