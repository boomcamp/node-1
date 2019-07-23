const products = require('../products.json');

const getProducts = (req, res) => {
	
	if (req.query.price){
		const item = products.filter(val => val.price >= parseInt(req.query.price))
		if (item.length === 0){
			return res.status(500).send('no items found');
		}
		return res.status(200).send(item)
	}else {
		return res.status(200).send(products)
	}
	
}
module.exports = getProducts;	
