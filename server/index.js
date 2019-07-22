
const express = require('express')

const PORT = 3000

const app = express()

const products = require('../products.json')

const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

app.listen(PORT, (err) => {
	if(err) {
		return console.error(err)
	}
	console.log(`Listening on port ${PORT}`)
});

app.get('/api/products',getProducts)
app.get('/api/product/:id', getProduct)