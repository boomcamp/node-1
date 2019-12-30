const products = require("../products.json");

const getProduct = (req, res) => {
    const item = products.find(val=>val.id === parseInt(req.params.id));

   return item ?  res.status(500).send(item) : res.status(200).send(item)
};

module.exports = getProduct;
