const Product = require('../models/Product.model');

module.exports.productController = {
   getProducts: async (req, res) => {
      try {
         const data = await Product.find();
         res.status(200).json(data);
      } catch (error) {
         res.status(404).json(error + '. Ошибка при получении меню');
      }
   },
   getProductsByCategory: async (req, res) => {
      try {
         const data = await Product.find({ category: req.params.id });
         res.status(200).json(data);
      } catch (error) {
         res.status(404).json(error + '. Ошибка при получении меню по категориям');
      }
   },
   getProductById: async (req, res) => {
      try {
         const data = await Product.findById(req.params.id);
         res.status(200).json(data);
      } catch (error) {
         res.status(404).json(error + '. Ошибка при получении блюды');
      }
   },
   postProduct: async (req, res) => {
      try {
         const { name, urlImage, price, size, category } = req.body;
         await Product.create({ name, urlImage, price, size, category });
         res.status(201).json('Успешно добавлено');
      } catch (error) {
         res.status(400).json(error + '. Ошибка при добавлении блюды');
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
         res.status(200).json('Успешно изменен')
      } catch (error) {
         res.status(404).json(error + '. Ошибка при обновлении блюды');
      }
   },
   deleteProduct: async (req, res) => {
      try {
         await Product.findByIdAndRemove(req.params.id);
         res.status(200).json('Удалено');
      } catch (error) {
         res.status(404).json(error + '. Ошибка при удалении блюды');
      }
   },
};
