const Router = require('express');
const { orderController } = require('../controllers/order.controller');

const route = Router();

route.get('./categories', orderController.getOrder);
route.post('./category', orderController.postOrder);
route.patch('./category/:id', orderController.updateOrder);
route.delete('./category/:id', orderController.deleteOrder);

module.exports = route;