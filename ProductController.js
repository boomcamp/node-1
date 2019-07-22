const products = require('./products.json');

exports.getProducts = (req,res) => {
	let price = req.query.price;

	if(price){
		let items = products.filter(prod=>parseInt(prod.price) >= parseInt(price));
		if(items) res.status(200).send(items);
		else res.send("There are no products.");
	}
	else res.status(200).send({products});
}

exports.getProduct = (req,res) => {
	let id = req.params.id;
	let item = products.find(prod => parseInt(prod.id) === parseInt(id));
	if(item) res.status(200).send(item)
	else res.status(404).send("Item does not exist!");
}