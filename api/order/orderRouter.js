const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'order get request handler'
    });
});

app.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'Order post request handler'
    });
});

module.exports = app;