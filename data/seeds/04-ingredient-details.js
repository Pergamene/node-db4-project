
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('IngredientDetails').del()
    .then(function () {
      // Inserts seed entries
      return knex('IngredientDetails').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 1, unit: 'lbs'},
        {recipe_id: 1, ingredient_id: 2, quantity: 4, unit: 'shells'},
        {recipe_id: 1, ingredient_id: 3, quantity: 0.5, unit: 'tomatoes'},
        {recipe_id: 1, ingredient_id: 4, quantity: 0.25, unit: 'heads'},
        {recipe_id: 2, ingredient_id: 5, quantity: 0.25, unit: 'cups'},
        {recipe_id: 2, ingredient_id: 6, quantity: 0.33, unit: 'cubes'},
        {recipe_id: 2, ingredient_id: 7, quantity: 1, unit: 'dash'},
        {recipe_id: 3, ingredient_id: 8, quantity: 4, unit: 'scoops'},
        {recipe_id: 3, ingredient_id: 9, quantity: 2, unit: 'bananas'},
        {recipe_id: 3, ingredient_id: 10, quantity: 1, unit: 'cups'},
        {recipe_id: 3, ingredient_id: 11, quantity: 0.25, unit: 'cups'},
      ]);
    });
};
