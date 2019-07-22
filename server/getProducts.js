
const products = require('../products.json');
const message = "The";
const getProducts = (req, res) => {
    if (req.query.price) {
        const items = products.filter(
          val => val.price >= parseInt(req.query.price)
        );
        if(items.length > 0){
          return res.status(200).send(items);
        }else{
          return res.status(200).send("There's No Result Found");
        }
    }else if(req.query.product_name){
        const items = products.filter(
            val => val.product_name.toLowerCase().indexOf(req.query.product_name.toLowerCase()) !== -1
        );
        if(items.length > 0){
            return res.status(200).send(items);
        }else{
            return res.status(200).send("There's No Result Found");
        }
    }
      res.status(200).send(products);
};

module.exports = getProducts;
