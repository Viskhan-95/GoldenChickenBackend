const Router = require('express');
const { productController } = require('../controllers/products.controller');

const route = Router();

route.get('/food', productController.getProducts);
route.get('/food/category/:id', productController.getProductsByCategory);
route.get('/food/:id', productController.getProductById);
route.post('/food', productController.postProduct);
route.patch('/food/:id', productController.updateProduct);
route.delete('/food/:id', productController.deleteProduct);

module.exports = route;