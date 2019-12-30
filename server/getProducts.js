const products = require('../products.json')

const getProducts = (req, res) => {
    if (req.query.price) {
        const item = products.filter(val => val.price >= Number(req.query.price))
        return res.status(200).send(item)
    }
    res.status(200).send(products);

    const prod = products.find(data => data.id === Number(req.params.id));
    if (!prod) {
        return res.status(500).send('Item not on the list');
    }
    res.status(200).send(prod);
}

module.exports = getProducts