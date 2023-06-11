const Category = require('../models/Category.model');

module.exports.categoryController = {
   getCategories: async (req, res) => {
      try {
         const data = await Category.find();
         res.json(data);
      } catch (error) {
         res.json(error + '. Ошибка при попытке получить категории!');
      }
   },
   postCategory: async (req, res) => {
      try {
         const { name, urlImage } = req.body;
         Category.create({ name, urlImage });
         res.json('Категория добавлена');
      } catch (error) {
         res.json(error + '. Ошибка при попытке добавить категорию');
      }
   },
   updateCategory: async (req, res) => {
      try {
         const { name, urlImage } = req.body;
         Category.findByIdAndUpdate(req.params.id, {
            name,
            urlImage,
         });
         res.json('Категория изменена');
      } catch (error) {
         res.json(error + '. Произошла ошибка при изменении категории');
      }
   },
   deleteCategory: async (req, res) => {
      try {
         Category.findByIdAndRemove(req.params.id);
         res.json('Категория удалена');
      } catch (error) {
         res.json(error + '. Ошибка при попытке удалить категорию');
      }
   },
};
