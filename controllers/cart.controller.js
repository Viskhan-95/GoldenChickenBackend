const Cart = require('../models/Cart.model');

module.exports.cartController = {
   getCart: async (req, res) => {
      try {
         const data = await Cart.find().populate('food');
         data === null ? res.json('Корзина пуста') : res.json(data);
      } catch (error) {
         res.json(error + '. Ошибка загрузки корзины');
      }
   },
   postToCart: async (req, res) => {
      try {
         const { food, price, total, count } = req.body;
         const data = await Cart.findById(req.params.id);
         if (data !== null) {
            data.count += count;
            data.total += total;
            await data.save();
         } else {
            await Cart.create({ food, price, total, count });
         }
         res.json('Добавлен в корзину');
      } catch (error) {
         res.json(error + '. Ошибка при добавлении в корзину');
      }
   },
   updateCart: async (req, res) => {
      try {
         const { price, count } = req.body;
         const data = await Cart.findById(req.params.id);
         data.price += price;
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
