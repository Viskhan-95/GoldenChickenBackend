const Cart = require('../models/Cart.model');

module.exports.cartController = {
   getCart: async (req, res) => {
      try {
         const data = await Cart.findOne({ user: req.params.id }).populate('products');
         data === null ? res.status(204).json('Корзина пуста') : res.status(200).json(data);
      } catch (error) {
         res.status(404).json(error + '. Ошибка загрузки корзины');
      }
   },
   postToCart: async (req, res) => {
      try {
         const { user, product, quantity, shipping, delivery_status, payment_status } = req.body;
         let data = await Cart.findOne({ user: user });
         if (!data) {
            data = new Cart({
               user: user,
               products: [{ product, quantity }],
            });
         } else {
            const index = data.products.findIndex((prod) => prod.product === product);
            if (index !== -1) {
               data.products[index].quantity += quantity;
            } else {
               data.products.push({ product, quantity });
            }
         }
         await data.save();
         res.status(201).json(data);
      } catch (error) {
         res.status(400).json(error + '. Ошибка при добавлении в корзину');
      }
   },
   updateCart: async (req, res) => {
      try {
         const { user, product, quantity } = req.body;
         const data = await Cart.findOne({ user: user });
         const index = data.prod.findIndex((prod) => prod.product === product);
         if (index !== -1) {
            data.products[index].quantity = quantity;
            await data.save();
            res.status(200).json(data);
         } else {
            res.status(404).json('Продукт не найден в корзине');
         }
      } catch (error) {
         res.status(404).json(error + '. Ошибка при изменении кол-ва продуктов');
      }
   },
   updateStatusCart: async (req, res) => {
      try {
         const [user, shipping, delivery_status, payment_status] = req.body;
         const data = Cart.findOne({ user: user });
         data.shipping = shipping;
         data.delivery_status = delivery_status;
         data.payment_status = payment_status;
         await data.save();
         res.status(200).json(data)
      } catch (error) {
         res.status(400).json(error + '. Ошибка при обновлении статусов корзины')
      }
   },
   deleteFromCart: async (req, res) => {
      try {
         const { user, product } = req.body;
         const data = await Cart.findOne({ user: user });
         data.products = data.products.filter((prod) => prod.product !== product);
         await data.save();
         res.status(200).json(data);
      } catch (error) {
         res.status(404).json(error + '. Ошибка при удалении из корзины');
      }
   },
   clearCart: async (req, res) => {
      try {
         const [user] = req.body;
         const data = await Cart.findOne({ user: user });
         data.products = [];
         data.shipping = null;
         data.delivery_status = null;
         data.payment_status = null;
      } catch (error) {
         res.status(404).json(error + '. Ошибка при очищении корзины');
      }
   },
};
