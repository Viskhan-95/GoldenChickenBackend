const Router = require('express');
const { cartController } = require('../controllers/cart.controller');


const route = Router();

route.get('/cart', cartController.getCarts);
route.post('/cart', cartController.postCart);
route.delete('/cart', cartController.deleteCart);


module.exports = route;