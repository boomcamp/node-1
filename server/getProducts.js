const products = require("../products.json");

const getProducts = (req, res) => {

  if(req.query.price){
    const inPriceGroup = products.filter((val)=>{
        return val.price >= parseInt(req.query.price)
    });
    return res.status(200).send(inPriceGroup)
  }

  res.send(products).status(200);

};

module.exports = getProducts;