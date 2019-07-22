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
    if(req.query.name){
        products.map(prod => {
            if(prod.product_name.toLowerCase() === req.query.name.toLowerCase()){
                return res.status(200).send(prod);
            }
        })
        res.status(500).send('Item not in list'); 
    }
    res.status(200).send(products);
};

module.exports = getProducts;