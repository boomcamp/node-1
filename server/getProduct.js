const products = require('../products.json');

const getProduct = (req, res) => {
  const item = products.find(data =>
    data.id === parseInt(req.params.id)
  )

  if(!item) {
    res.status(500).send('Item not in list')
  }
  res.status(200).send(item)
}

module.exports = getProduct;
