const products = require('../products.json')

const getProducts = (req, res) => {
    if (req.query.price) {
        const item = products.filter(val => val.price >= Number(req.query.price))
        return res.status(200).send(item)
    }
    res.status(200).send(products);

}

module.exports = getProducts