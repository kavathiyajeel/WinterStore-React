var express = require('express')
var router = express.Router() 
const productsController = require('../controller/product.controller');
const Auth = require('../middleware/Auth')
// Get all products
router.get('/getall',Auth.IsAuth,Auth.IsAdmin,productsController.getAllProducts);
// Featured Products 
router.get('/featured/:idealfor',productsController.FeaturedProduct);

// Get products by category
router.get('/category/:category', productsController.getProductsByCategory);

// Get products by idealfor
router.get('/idealfor/:idealfor', productsController.getProductsByIdealfor);

// Get a product by ID
router.get('/:id', productsController.getProductById);

// Create a new product
router.post('/add',Auth.IsAuth,Auth.IsAdmin, productsController.createProduct);
// router.get('/additem', (req,res)=>{
//     res.render("product")
// });

// Update a product by ID
router.put('/:id',Auth.IsAuth,Auth.IsAdmin, productsController.updateProductById);

// Delete a product by ID
router.delete('/:id',Auth.IsAuth,Auth.IsAdmin, productsController.deleteProductById);

module.exports = router