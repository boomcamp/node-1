const products = require('../products.json');

const getAllProducts = (req,res) => {
	res.status(200).send(products)
}

module.exports = getAllProducts;
