const Category = require('../models/Category.model');

module.exports.categoryController = {
   getCategories: async (req, res) => {
      try {
         const data = await Category.find();
         res.status(200).json(data);
      } catch (error) {
         res.status(404).json(error + '. Ошибка при получении категории!');
      }
   },
   postCategory: async (req, res) => {
      try {
         const { name } = req.body;
         await Category.create({ name });
         res.status(201).json('Категория добавлена');
      } catch (error) {
         res.status(400).json(error + '. Ошибка при добавлении категории');
      }
   },
   updateCategory: async (req, res) => {
      try {
         const { name } = req.body;
         await Category.findByIdAndUpdate(req.params.id, {
            name,
         });
         res.status(200).json('Категория изменена');
      } catch (error) {
         res.status(404).json(error + '. Ошибка при изменении категории');
      }
   },
   deleteCategory: async (req, res) => {
      try {
         await Category.findByIdAndRemove(req.params.id);
         res.status(200).json('Категория удалена');
      } catch (error) {
         res.status(404).json(error + '. Ошибка при удалении категории');
      }
   },
};
