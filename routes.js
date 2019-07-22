const router = require('express').Router();
const ProductController = require('./ProductController');
homeDirectory = (req,res) => {
	res.send('Ecommerce API');
}

router.route('/').get(homeDirectory);
router.route('/product').get(ProductController.getProducts);
router.route('/product/:id').get(ProductController.getProduct);

module.exports = router;