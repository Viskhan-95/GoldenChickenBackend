const Product = require('../models/Product.model');

module.exports.productController = {
   getProducts: async (req, res) => {
      try {
         const data = await Product.find();
         res.json(data);
      } catch (error) {
         res.json(error + '. Ошибка при получении меню');
      }
   },
   getProductsByCategory: async (req, res) => {
      try {
         const data = await Product.find({ category: req.params.id });
         res.json(data);
      } catch (error) {
         res.json(error + '. Ошибка при получении меню по категориям');
      }
   },
   getProductById: async (req, res) => {
      try {
         const data = await Product.findById(req.params.id);
         res.json(data);
      } catch (error) {
         res.json(error + '. Ошибка при получении блюды');
      }
   },
   postProduct: async (req, res) => {
      try {
         const { name, urlImage, price, size, category } = req.body;
         await Product.create({ name, urlImage, price, size, category });
         res.json('Успешно добавлено');
      } catch (error) {
         res.json(error + '. Ошибка при добавлении блюды');
      }
   },
   updateProduct: async (req, res) => {
      try {
         const { name, urlImage, price, size, category } = req.body;
         await Product.findByIdAndUpdate(req.params.id, {
            name,
            urlImage,
            price,
            size,
            category,
         });
      } catch (error) {
         res.json(error + '. Ошибка при обновлении блюды');
      }
   },
   deleteProduct: async (req, res) => {
      try {
         await Product.findByIdAndRemove(req.params.id);
         res.json('Удалено');
      } catch (error) {
         res.json(error + '. Ошибка при удалении блюды');
      }
   },
};
