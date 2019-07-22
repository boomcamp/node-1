const prod = require('../products.json');

const getProd = (req, res) => {
    if (req.query.price){
        const items = prod.filter(
            val => val.price >= parseInt(req.query.price)
        );
        return res.status(200).send(items);
    }
    res.status(200).send(prod);
  };

module.exports = getProd;