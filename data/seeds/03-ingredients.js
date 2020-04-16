
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {name: 'Meat'},
        {name: 'Shell'},
        {name: 'Tomato'},
        {name: 'Lettuce'},
        {name: 'Popcorn kernels'},
        {name: 'Butter'},
        {name: 'Salt'},
        {name: 'Vanilla ice cream'},
        {name: 'Banana'},
        {name: 'Milk'},
        {name: 'Choco powder'},
      ]);
    });
};
