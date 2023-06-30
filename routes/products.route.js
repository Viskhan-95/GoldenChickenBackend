const Router = require('express');
const { productController } = require('../controllers/products.controller');

const route = Router();

route.get('/products', productController.getProducts);
route.get('/products/:id', productController.getProductsByCategory);
route.get('/product/:id', productController.getProductById);
route.post('/product', productController.postProduct);
route.patch('/product/:id', productController.updateProduct);
route.delete('/product/:id', productController.deleteProduct);

module.exports = route;