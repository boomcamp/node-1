const products = require('../products.json')

const getProducts = (req, res) => {
    const prod = products.find(data => data.id === Number(req.params.id));
    if (!prod) {
        return res.status(500).send('Item not on the list');
    }
    res.status(200).send(prod);
}

module.exports = getProducts