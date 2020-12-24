const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api', (req, res)=> res.json({username:'Hi'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})