const Router = require('express');
const { cartController } = require('../controllers/cart.controller');

const route = Router();

route.get('/cart', cartController.getCart);
route.post('/cart', cartController.postToCart);
route.patch('/cart', cartController.updateCart);
route.delete('/cart', cartController.deleteFromCart);

module.exports = route;