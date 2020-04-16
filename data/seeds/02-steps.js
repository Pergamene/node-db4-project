
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('Steps').insert([
        {instruction: 'Cook meat', step_number: 1, recipe_id: 1},
        {instruction: 'Toast shells', step_number: 2, recipe_id: 1},
        {instruction: 'Chop veggies', step_number: 3, recipe_id: 1},
        {instruction: 'Assemble', step_number: 4, recipe_id: 1},
        {instruction: 'Pop kernels', step_number: 1, recipe_id: 2},
        {instruction: 'Melt butter', step_number: 2, recipe_id: 2},
        {instruction: 'Add butter and salt', step_number: 3, recipe_id: 2},
        {instruction: 'Put ice cream in blender', step_number: 1, recipe_id: 3},
        {instruction: 'Add banana', step_number: 2, recipe_id: 3},
        {instruction: 'Add milk', step_number: 3, recipe_id: 3},
        {instruction: 'Add choco powder', step_number: 4, recipe_id: 3},
      ]);
    });
};
