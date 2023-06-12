const Food = require('../models/Food.model');

module.exports.foodController = {
   getFood: async (req, res) => {
      try {
         const data = await Food.find();
         res.json(data);
      } catch (error) {
         res.json(error + '. Ошибка при получении меню');
      }
   },
   getFoodByCategory: async (req, res) => {
      try {
         const data = await Food.find({ category: req.params.id });
         res.json(data);
      } catch (error) {
         res.json(error + '. Ошибка при получении меню по категориям');
      }
   },
   getFoodById: async (req, res) => {
      try {
         const data = await Food.findById(req.params.id);
         res.json(data);
      } catch (error) {
         res.json(error + '. Ошибка при получении блюды');
      }
   },
   postFood: async (req, res) => {
      try {
         const { name, urlImage, price, size, category } = req.body;
         await Food.create({ name, urlImage, price, size, category });
         res.json('Успешно добавлено');
      } catch (error) {
         res.json(error + '. Ошибка при добавлении блюды');
      }
   },
   updateFood: async (req, res) => {
      try {
         const { name, urlImage, price, size, category } = req.body;
         await Food.findByIdAndUpdate(req.params.id, {
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
   deleteFood: async (req, res) => {
      try {
         await Food.findByIdAndRemove(req.params.id);
         res.json('Удалено');
      } catch (error) {
         res.json(error + '. Ошибка при удалении блюды');
      }
   },
};
