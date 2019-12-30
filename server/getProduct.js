const product = require('../products.json');

const getProduct = (request, response) => {
  const item = product.find(value => value.id === parseInt(request.params.id));
  return (!item) ? response.status(500).send('Item not in list') : response.status(200).send(item);
}

module.exports = getProduct;