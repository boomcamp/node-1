const products = require('../products.json');

app.get('/api/products', (req, res) => {
	res.status(200).send(products);
	console.log(`[+] Get request : /api/products`);
});

module.exports = getProducts;