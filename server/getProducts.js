const products = require('../products.json');

const getProducts = (req, res) => {
	if (req.query.price) {
		const item = products.filter((prod) => prod.price >= parseInt(req.query.price));
		res.status(200).send(item);
	}
	res.status(200).send(products);
};

module.exports = getProducts;
