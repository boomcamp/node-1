const express = require('express');

const app = express();


const getProducts = require('./getProducts');
const getProduct = require('./getProduct');


app.get('/api/products' , getProducts);
app.get('/api/product/:id' , getProduct);



const PORT = 3000;

app.listen(PORT , (err) => {


	if(err){
		console.log(err)
	}

	console.log(`Server listening on port: ${PORT}`);
})