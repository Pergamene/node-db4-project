const db = require('../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  db('Recipes');
}

function getShoppingList(recipe_id) {
  db('IngredientDetails')
    .select('Ingredients.name as Ingredient', 'IngredientDetails.quantity as Quantity', 'IngredientDetails.unit as Units')
    .join('Ingredients', 'IngredientDetails.ingredient_id', 'Ingredients.id')
    .where('IngredientDetails.recipe_id', recipe_id);
}

function getInstructions(recipe_id) {
  db('Steps')
    .select('instruction as Instructions', 'step_number as Step')
    .where('recipe_id', recipe_id);
}
