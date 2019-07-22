const router = require('express').Router();
const ProductController = require('./ProductController');
homeDirectory = (req,res) => {
	res.send("<h3>Ecommerce API</h3><br><a href='/product'>Products</a>")
}
router.route('/').get(homeDirectory);
router.route('/product').get(ProductController.getProducts);
router.route('/product/:id').get(ProductController.getProduct);

module.exports = router;