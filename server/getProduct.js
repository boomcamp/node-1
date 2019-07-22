const products = require('../products.json');
const getProduct = (req, res) => {
  const items = products.find(item => item.id === parseInt(req.params.id)
    );
  if (!items) {
    return res.status(500).send('Item not in list');
  }
  res.status(200).send(items);
};

module.exports = getProduct;