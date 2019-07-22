const products = require('../products.json');

const getProducts = (req, res) => {
    if(req.query.price){
        let items = [];
        products.map(prod => {
            if(prod.price >= parseInt(req.query.price)){
                items.push(prod)
            }
            return items
        })
        return res.status(200).send(items);
    }
    res.status(200).send(products);
};

module.exports = getProducts;