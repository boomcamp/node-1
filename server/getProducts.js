const products = require('../products.json');


const getProducts = (request ,  response) => {
	if(request.query.price){
		let items = products.filter(value => value.price >= parseInt(request.query.price));
		return response.status(200).send(items);
	}

	response.status(200).send(products);
}

module.exports = getProducts;