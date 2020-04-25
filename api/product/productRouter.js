const express = require('express');
const app = express();


app.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'get request handler for /products'
    });
});

app.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'post request handler for /product'
    });
});

module.exports = app;