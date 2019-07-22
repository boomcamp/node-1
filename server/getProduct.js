const products = require('../products.json');

const getProduct = (req, res) => {

    const item = products.map(val => {
        if(val.id === parseInt(req.params.id)){
            return val;
        }
    });
    if (!item) {
      return res.status(500).send('Item not in list');
    }
    res.status(200).send(item);
  };
  
module.exports = getProduct;
 