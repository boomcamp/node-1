const products = require('../products.json');

const getProducts = (req, res) => {
	if(req.query.price) {
		const prod = products.filter(x => x.price >= parseInt(req.query.price));
		res.status(200).send(prod)
	} else {
		res.status(200).send(products);
	}
	console.log(`[+] Get request : /api/products`);
};

module.exports = getProducts;