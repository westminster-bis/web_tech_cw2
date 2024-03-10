const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

// Route to display the form to add a new recipe
router.get('/new', (req, res) => {
  res.render('recipes/new');
});

// Route to handle the submission of the form
router.post('/', async (req, res) => {
  const recipe = new Recipe(req.body.recipe);
  await recipe.save();
  res.redirect(`/recipes/${recipe.id}`);
});

module.exports = router;
