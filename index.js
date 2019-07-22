const express = require('express');
const products = require('./products.json');
const router = require('./routes');
const app = express();
const PORT = 1234;
app.use(router);
app.listen(PORT,()=>console.log("Server running smooth on PORT",PORT));
