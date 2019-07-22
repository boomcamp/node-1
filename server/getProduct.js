const products = require('../products.json');

const getProduct = (req, res) => {
    products.map(prod => {
                if(prod.id == parseInt(req.params.id)){
                    res.status(200).send(products[req.params.id-1])
                }
    })
    res.status(500).send('Item not in list'); 
};

module.exports = getProduct;