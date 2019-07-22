const products = require('../products.json')

const getProducts = function (req, res) {    
    if(req.query.price) {
        const prodPrice = products.filter(item => 
            item.price >= parseFloat(req.query.price)
        )
        return res.status(200).send(prodPrice)
    }
    else {
        return res.status(200).send(products)
    }
}

module.exports = getProducts