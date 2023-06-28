const Order = require("../models/Order.model");
const Cart = require("../models/Cart.model");

module.exports.orderController = {
  getOrder: async (req, res) => {
    try {
      const data = await Order.find().populate("product");
      data === null ? res.json("Корзина пуста") : res.json(data);
    } catch (error) {
      res.json(error + ". Ошибка загрузки корзины");
    }
  },
  postOrder: async (req, res) => {
    try {
      const {
        user,
        product,
        quantity,
        shipping,
        delivery_status,
        payment_status,
      } = req.body;

      const cart = Cart.find({ user: user });

      const data = await Order.find({ cart: cart }).exec((err, res) => {
        if (res.products.length === 0) {
          const products = [{ product, quantity }];
          Order.create({ products, shipping, delivery_status, payment_status });
        } else {
          for (let item of res.products) {
            if (item === product) {
              item.quantity += quantity;
            } else {
              res.products.push({ product, quantity });
            }
          }
        }
      });
      await data.save();
      res.json("Добавлен в корзину");
    } catch (error) {
      res.json(error + ". Ошибка при добавлении в корзину");
    }
  },
  updateOrder: async (req, res) => {
    try {
      const { quantity } = req.body;
      const cart = Cart.find({ user: user });
      const data = await Order.find({ cart: cart });
      data.quantity += quantity;
      await data.save();
      res.json("Изменен");
    } catch (error) {
      res.json(error + ". Ошибка при изменении кол-ва продуктов");
    }
  },
  deleteOrder: async (req, res) => {
    try {
      const cart = Cart.find({ user: user });
      await Order.findByIdAndRemove({cart: cart});
      res.json("удалено с корзины");
    } catch (error) {
      res.json(error + ". Ошибка при удалении из корзины");
    }
  },
};
