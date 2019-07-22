const products = require('../products.json');

const getProduct = (req, res) => {
	const prod = products.filter(x => x.id == parseInt(req.params.id));

	if(prod.length == 0) {
		return res.status(500).send('Item not found');
	} else {
		res.status(200).send(prod)
	}
	console.log(`[+] Get request : /api/products`);
};

module.exports = getProduct;