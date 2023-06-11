const { Router } = require('express');

const route = Router();

// route.use(require('./cart.route'));
route.use(require('./categories.route'));
// route.use(require('./food.route'));

module.exports = route;