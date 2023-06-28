const { Router } = require('express');

const route = Router();

route.use(require('./cart.route'));
route.use(require('./categories.route'));
route.use(require('./products.route'));

module.exports = route;