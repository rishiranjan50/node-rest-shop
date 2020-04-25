const express = require('express');
const morgan = require('morgan');
const app = express();
const productRouter = require('./api/product/productRouter');
const orderRouter = require('./api/order/orderRouter');

app.use('/products',productRouter);
app.use('/orders',orderRouter);

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status(404);
    next(error);
});

app.use((error,req,res,next)=>{
   res.status(error.status || 500);
   res.json({
    error:{
        message:error.message
    }
   });
})

module.exports = app;