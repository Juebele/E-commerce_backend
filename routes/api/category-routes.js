const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// router.get('/', (req, res) => {
//   // find all categories
//   // be sure to include its associated Products
// });


router.get('/:id', async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (!category) {
        res.status(404).json({ message: 'No category with this id!' });
        return;
      }
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
      return;
    }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
