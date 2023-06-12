const Router = require('express');
const { foodController } = require('../controllers/food.controller');

const route = Router();

route.get('/food', foodController.getFood);
route.get('/food/category/:id', foodController.getFoodByCategory);
route.get('/food/:id', foodController.getFoodById);
route.post('/food', foodController.postFood);
route.patch('/food/:id', foodController.updateFood);
route.delete('/food/:id', foodController.deleteFood);

module.exports = route;