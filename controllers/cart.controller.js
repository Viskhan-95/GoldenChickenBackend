const Cart = require("../models/Cart.model");

module.exports.cartController = {
  getCarts: async (req, res) => {
    try {
      const data = await Cart.find();
      res.json(data);
    } catch (error) {
      res.json(error + ". Ошибка при получении корзин!");
    }
  },
  postCart: async (req, res) => {
    try {
      const { user } = req.body;
      await Cart.create({ user });
      res.json("Корзина создана");
    } catch (error) {
      res.json(error + ". Ошибка при создании корзины");
    }
  },
  deleteCart: async (req, res) => {
    try {
      const { user } = req.body;
      await Cart.findOneAndDelete({user: user});
      res.json("Категория удалена");
    } catch (error) {
      res.json(error + ". Ошибка при удалении категории");
    }
  },
};
