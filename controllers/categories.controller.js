const Category = require('../models/Category.model');

module.exports.categoryController = {
   getCategories: async (req, res) => {
      try {
         const data = await Category.find();
         res.json(data);
      } catch (error) {
         res.json(error + '. Ошибка при получении категории!');
      }
   },
   postCategory: async (req, res) => {
      try {
         const { name, urlImage } = req.body;
         await Category.create({ name, urlImage });
         res.json('Категория добавлена');
      } catch (error) {
         res.json(error + '. Ошибка при добавлении категории');
      }
   },
   updateCategory: async (req, res) => {
      try {
         const { name, urlImage } = req.body;
         await Category.findByIdAndUpdate(req.params.id, {
            name,
            urlImage,
         });
         res.json('Категория изменена');
      } catch (error) {
         res.json(error + '. Ошибка при изменении категории');
      }
   },
   deleteCategory: async (req, res) => {
      try {
         await Category.findByIdAndRemove(req.params.id);
         res.json('Категория удалена');
      } catch (error) {
         res.json(error + '. Ошибка при удалении категории');
      }
   },
};
