const CartProduct = require('../models/CartProduct.model');

module.exports.cartController = {
   getCart: async (req, res) => {
      try {
         const data = await Cart.find().populate('product');
         data === null ? res.json('Корзина пуста') : res.json(data);
      } catch (error) {
         res.json(error + '. Ошибка загрузки корзины');
      }
   },
   postToCart: async (req, res) => {
      try {
         const { user, product, quantity, shipping, delivery_status, payment_status } = req.body;
         const data = await Cart.findById({ user: user });
         if (data.products.length > 0) {
         } else if (data === null) {
            await Cart.create({ user });
         } else {
            await Cart.create({ food, total, count });
         }
         res.json('Добавлен в корзину');
      } catch (error) {
         res.json(error + '. Ошибка при добавлении в корзину');
      }
   },
   updateCart: async (req, res) => {
      try {
         const { total, count } = req.body;
         const data = await Cart.findById(req.params.id);
         data.total += total;
         data.count += count;
         await data.save();
         res.json('Изменен');
      } catch (error) {
         res.json(error + '. Ошибка при изменении кол-ва продуктов');
      }
   },
   deleteFromCart: async (req, res) => {
      try {
         await Cart.findByIdAndRemove(req.params.id);
         res.json('Блюда ');
      } catch (error) {
         res.json(error + '. Ошибка при удалении из корзины');
      }
   },
};
