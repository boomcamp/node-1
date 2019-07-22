const products = require('../products.json');

const getProduct = (request ,  response) => {
	// response.status(200).send("asdasd");

	const item = products.find(value => value.id === parseInt(request.params.id))

	if(!item) {

		return response.status(500).send("Item not found!");
	}
	response.status(200).send(item);

}

module.exports = getProduct;