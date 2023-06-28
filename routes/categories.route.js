const Router = require('express');
const { categoryController } = require('../controllers/categories.controller');

const route = Router();

route.get('/categories', categoryController.getCategories);
route.post('/category', categoryController.postCategory);
route.patch('/category/:id', categoryController.updateCategory);
route.delete('/category/:id', categoryController.deleteCategory);

module.exports = route;