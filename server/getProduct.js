const products = require('../products.json')

const getProduct = (req, res) => {
    const prodItem = products.find(item => 
        item.id === parseInt(req.params.id))
        if(!prodItem) {
            return res.status(500).send('Item not in the list')
        }
        else {
            return res.status(200).send(prodItem)
        }
}

module.exports = getProduct