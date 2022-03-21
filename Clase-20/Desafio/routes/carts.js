const { mongoCartsController } = require('../controllers');
const router = require('express').Router();

router.get('/', mongoCartsController.get); // Get all carts
router.post('/', mongoCartsController.post); // Create a new cart
router.get('/:id', mongoCartsController.getById); // Get a cart by id
router.get('/:id/products', mongoCartsController.getProducts); // Get all products from a cart
router.delete('/:id/products/:id_prod', mongoCartsController.delete); // Delete a product from a cart
router.delete('/:id', mongoCartsController.delete); // Delete a cart by id
router.post('/:id/products/:id_prod', mongoCartsController.addProduct); // Add a product to a cart

/* 
router.post('/', cors(), auth(true,'carrito'), Controller.createCart);
router.delete('/:id',cors(), auth(true,'carrito'), Controller.deleteCart);
router.delete('/:id/productos/:id_prod',cors(), auth(true,'carrito'), Controller.deleteProductOnCart);
router.post('/:id/productos',cors(), auth(true,'carrito'), Controller.addProductOnCart);
router.get('/:id/productos',cors(), auth(true,'carrito'), Controller.getCartProducts);
*/

module.exports = router;
