const products = require('../products.json');

module.exports = {
	getProduct: (req, res) => {
		// find returns the item if it finds it, or undefined if not
		const item = products.find(val => val.id === parseInt(req.params.id));
		if (!item) {
			return res.status(500).send('Item not in list');
		}
		res.status(200).send(item);
	},
	addPost: (req, res) => {
		products.push({
			id: products.length + 1,
			...req.body
		});
		res.status(200).json(products);
	},
	editPost: (req, res) => {
		products.forEach(item => {
			if (item.id === parseInt(req.params.id)) {
				item.product_name = req.body.product_name;
				item.price = req.body.price ? req.body.price : item.price;
				item.img_url = req.body.img_url ? req.body.img_url : item.img_url;
			}
		});
		res.status(200).json(products);
	},
	deletePost: (req, res) => {
		products.forEach((item, index) => {
			if (item.id === parseInt(req.params.id)) {
				products.splice(index, 1);
			}
		});
		res.status(200).json(products);
	}
};
